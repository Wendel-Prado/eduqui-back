import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VIDEO_MODEL } from '../constants';
import { VideoController } from '../controllers/video.controller';
import { DatabaseModule } from '../database/database.module';
import { VideoSchema } from '../schemas/video.schema';
import { ApiService } from '../services/api.service';
import { VideoService } from '../services/video.service';

@Module({
  imports: [
    DatabaseModule,

    MongooseModule.forFeature([{ name: VIDEO_MODEL, schema: VideoSchema }]),
  ],
  controllers: [VideoController],
  providers: [VideoService, ApiService],
})
export class VideoModule {}
