import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './hotel.model/hotel.model';

@Injectable()
export class HotelsService {
    constructor(@InjectModel(Hotel.name) private readonly hotelModel: Model<Hotel>) {}

    async GetAllHotels(): Promise<Hotel[]> {
        return this.hotelModel.find().populate('rooms').exec();
    }
}
