import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './booking.model/booking.model';

@Injectable()
export class BookingsService {
    constructor(@InjectModel(Booking.name) private readonly bookingModel: Model<Booking>) {}

    async getBookingDetails(bookingId: string): Promise<Booking | null> {
        return this.bookingModel.findById(bookingId)
          .populate('user', '-password')
          .populate('room')
          .populate('hotel')
          .exec();
      }

    async createBooking(createBookingDto: Booking): Promise<Booking> {
        const newBooking = new this.bookingModel(createBookingDto);
        return newBooking.save();
      }

}
