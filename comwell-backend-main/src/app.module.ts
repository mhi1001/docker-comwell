import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsModule } from './hotels/hotels.module';
import { AuthModule } from './auth/auth.module';
import { BookingsService } from './bookings/bookings.service';
import { BookingsController } from './bookings/bookings.controller';
import { BookingsModule } from './bookings/bookings.module';
import { LoggingMiddleware } from './logging.middleware';

@Module({
  imports: [
    //mongodb = in the docker network services are called by their name
    //MongooseModule.forRoot('mongodb://mongodb:27017/comwell'),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/comwell'),
    UsersModule, HotelsModule, BookingsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
//Log every request to console
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Apply the logging middleware to all routes
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
