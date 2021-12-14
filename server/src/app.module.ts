import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Booking } from "./booking/booking.entity";

//MongoDB
import { ProductsModule } from "./products/products.module";
import { MongooseModule } from "@nestjs/mongoose";

import { BookingController } from './booking/booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModule } from "./booking/booking.module";


@Module({
  imports: [
    BookingModule,
    // MongooseModule.forRoot(`mongodb+srv://Igor:igor1234@cluster0.lkc6i.mongodb.net/products?retryWrites=true&w=majority`)
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '11111111',
      database: 'booking_tool',
      entities: [Booking],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
