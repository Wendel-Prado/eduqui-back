import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';
import { DatabaseModule } from '../database/database.module';
import { VideoModule } from './video.module';
import { ApiModule } from './api.module';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule, VideoModule, ApiModule],
  controllers: [AppController],
})
export class AppModule {}
