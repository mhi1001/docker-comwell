import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Room, RoomSchema } from 'src/rooms/room.model/room.model';
import { Party, PartySchema } from 'src/parties/party.model';
import { Meeting, MeetingSchema } from 'src/meetings/meeting.model';

@Schema()
export class Hotel extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ type: [RoomSchema], default: [] })
  rooms: Room[];

  @Prop({ type: [MeetingSchema], default: [] })
  meetings: Meeting[];

  @Prop({ type: [PartySchema], default: [] })
  parties: Party[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
