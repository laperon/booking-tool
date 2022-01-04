import { Body, Controller, Get, Post } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { Booking } from "./migrations/booking.entity";
import { CreateProductDto } from "../products/dto/create-product.dto";
import { Product } from "../products/schemas/product.schema";
import { CreateBookingDto } from "./dto/create-booking.dto";

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get()
  getAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  // @Post()
  // create(): Promise<Booking> {
  //   return this.bookingService.create();
  // }

  @Post()
  create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
     return this.bookingService.create(createBookingDto);
  }
}
