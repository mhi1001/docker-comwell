// booking.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/user.model/user.model';
import { Hotel } from 'src/hotels/hotel.model/hotel.model';
import { Room } from 'src/rooms/room.model/room.model';

@Schema()
export class Booking extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User'})
  user?: Types.ObjectId;

  @Prop({
    type: {
      name: String,
      address: String,
      phone: String,
      email: String,
    },
  })
  guestInfo?: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };

  @Prop({ type: Types.ObjectId, ref: 'Room', required: true })
  room: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Hotel', required: true })
  hotel: Types.ObjectId;

  @Prop({ required: true })
  Checkin: Date;

  @Prop({ required: true })
  Checkout: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

}

export const BookingSchema = SchemaFactory.createForClass(Booking);
  