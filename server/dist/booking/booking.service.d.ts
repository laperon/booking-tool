import { Repository } from "typeorm";
import { Booking } from './booking.entity';
import { Connection } from "typeorm";
import { CreateBookingDto } from "./dto/create-booking.dto";
export declare class BookingService {
    private bookingRepository;
    private connection;
    constructor(bookingRepository: Repository<Booking>, connection: Connection);
    findAll(): Promise<Booking[]>;
    create(bookingDto: CreateBookingDto): Promise<Booking>;
    findOne(id: string): Promise<Booking>;
    remove(id: string): Promise<void>;
}
