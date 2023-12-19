import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, HotelSchema } from './hotel.model/hotel.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }])],
  controllers: [HotelsController],
  providers: [HotelsService],
})

export class HotelsModule {}
