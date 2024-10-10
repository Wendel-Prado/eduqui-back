import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtConfigService } from '../configs/jwt.config';
import { USER_MODEL } from '../constants';
import { DatabaseModule } from '../database/database.module';
import { JwtStrategy } from '../middlewares/jwt.strategy';
import { UserSchema } from '../schemas/user.schema';
import { UserService } from '../services/user.service';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: USER_MODEL, schema: UserSchema }]),
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
  ],
  providers: [UserService, JwtStrategy, JwtConfigService],
})
export class UserModule {}
