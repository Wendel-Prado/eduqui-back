import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtConfigService } from '../configs/jwt.config';
import { USER_MODEL } from '../constants';
import { AuthController } from '../controllers/auth.controller';
import { DatabaseModule } from '../database/database.module';
import { JwtStrategy } from '../middlewares/jwt.strategy';
import { UserSchema } from '../schemas/user.schema';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
    MongooseModule.forFeature([{ name: USER_MODEL, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy, JwtConfigService],
})
export class AuthModule {}
