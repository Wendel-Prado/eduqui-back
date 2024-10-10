import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from './database.providers';
import { DATABASE_CONNECTION } from '../constants';

@Module({
  imports: [MongooseModule.forRoot(DATABASE_CONNECTION)],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
