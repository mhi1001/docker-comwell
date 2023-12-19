import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Room, RoomSchema } from 'src/rooms/room.model/room.model';

@Schema()
export class Hotel extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ type: [RoomSchema], default: [] })
  rooms: Room[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
