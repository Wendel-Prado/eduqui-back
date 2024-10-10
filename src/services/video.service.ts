import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApiService } from './api.service';
import { Video } from '../schemas/video.schema';
import redisClient from '../configs/redis.config';
@Injectable()
export class VideoService {
  constructor(
    @InjectModel('Video') private readonly videoModel: Model<Video>,
    private readonly api: ApiService,
  ) {}

  async listVideos(page?: number): Promise<any> {
    const cacheKey = `videos-page-${page || 1}`;
    try {
      const cachedData = await redisClient.get(cacheKey);
      if (cachedData) {
        const data = JSON.parse(cachedData);
        return this.findVideoViews(data) || [];
      }
      const url = `videos/?page=${page || 1}`;
      const { data } = await this.api.request('GET', url);
      const processedData = await this.findVideoViews(data);

      await this.setCache(cacheKey, processedData);

      return processedData || [];
    } catch (err) {
      return err;
    }
  }
  async getVideo(id: string): Promise<any> {
    if (!id) throw new BadRequestException('É necessário um ID válido');

    try {
      const url = `videos/${id}`;
      const { data } = await this.api.request('GET', url);

      let video = await this.updateVideoViews(data.id);

      if (!video) video = await this.insertVideo(data.id, data.title);

      if (video) data.views = video.views;
      return data || {};
    } catch (err) {
      return err;
    }
  }

  async findVideoByTitle(searchQuery: string): Promise<any> {
    const cacheKey = `videos-title-${searchQuery}`;
    try {
      const cachedData = await redisClient.get(cacheKey);
      if (cachedData) {
        const data = JSON.parse(cachedData);
        return this.findVideoViews(data);
      }
      const url = `videos/?title=${searchQuery}`;
      const { data } = await this.api.request('GET', url);

      const processedData = await this.findVideoViews(data);
      await this.setCache(cacheKey, processedData);
      return processedData || [];
    } catch (err) {
      return err;
    }
  }

  async insertVideo(video_id: string, title: string) {
    return await new this.videoModel({
      video_id,
      title,
      views: 1,
    }).save();
  }

  async updateVideoViews(video_id: string) {
    return await this.videoModel
      .findOneAndUpdate({ video_id }, { $inc: { views: 1 } }, { new: true })
      .lean();
  }

  async findVideoViews(data: any) {
    const ids = data.videos?.map((row) => row.id);

    const videosViews = await this.videoModel
      .find({ video_id: { $in: ids } })
      .lean();

    data.videos.forEach((row) => {
      const videoFound = videosViews.find((e) => e.video_id == row.id);
      if (videoFound) {
        row.views = videoFound.views;
      }
    });

    return data;
  }
  async setCache(cacheKey, data) {
    await redisClient.set(cacheKey, JSON.stringify(data), {
      EX: 3600,
    });
  }
}
