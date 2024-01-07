import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Room extends Document {

  @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;
  
  @Prop({})
  number?: number;

  @Prop({})
  img?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: false })
  isBooked: boolean;

  @Prop({ default: false })
  bookingType: number;

  @Prop({ type: [String] })
  amenities?: string[];

  @Prop({ type: Types.ObjectId, ref: 'Hotel' })
  hotel: Types.ObjectId;
}

export const RoomSchema = SchemaFactory.createForClass(Room);