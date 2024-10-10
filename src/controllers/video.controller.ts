import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../middlewares/jwt-auth.guard';
import { VideoService } from '../services/video.service';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}
  @UseGuards(JwtAuthGuard)
  @Get('page/:page')
  listVideos(@Param('page') page: number) {
    return this.videoService.listVideos(page);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getVideoById(@Param('id') id: string) {
    return this.videoService.getVideo(id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('search/:title')
  searchVideos(@Param('title') searchQuery: string) {
    return this.videoService.findVideoByTitle(searchQuery);
  }
}
