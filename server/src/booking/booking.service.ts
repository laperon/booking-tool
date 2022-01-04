import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, Repository } from "typeorm";
import { Booking } from './migrations/booking.entity';
import { Connection } from "typeorm";
import { CreateProductDto } from "../products/dto/create-product.dto";
import { Product } from "../products/schemas/product.schema";
import { CreateBookingDto } from "./dto/create-booking.dto";

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    private connection: Connection,
  ) {}

  findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }

  async create(bookingDto: CreateBookingDto): Promise<Booking>{
    return this.bookingRepository.save(bookingDto)
  }

  findOne(id: string): Promise<Booking> {
    return this.bookingRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.bookingRepository.delete(id);
  }
}