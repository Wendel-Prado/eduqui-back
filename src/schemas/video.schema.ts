import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Video extends Document {
  @Prop({ required: true, unique: true })
  video_id: string;

  @Prop({})
  title: string;

  @Prop({})
  views: number;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
