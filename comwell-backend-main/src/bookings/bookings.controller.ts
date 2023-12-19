import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookingsService } from '../bookings/bookings.service';
import { Booking } from './booking.model/booking.model';

@Controller('bookings')
export class BookingsController { 
    constructor(private readonly bookingService: BookingsService) {}

@Get(':bookingId')
  async getBookingDetails(@Param('bookingId') bookingId: string) {
    const bookingDetails = await this.bookingService.getBookingDetails(bookingId);
    
    if (!bookingDetails) {
      return { message: 'Booking not found' };
    }

    return bookingDetails;
  }

@Post('add')
  async createBooking(@Body() booking: Booking) {
    const newBooking = await this.bookingService.createBooking(booking);
    return newBooking;
  }
}
