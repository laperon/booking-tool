import { BookingService } from "./booking.service";
import { Booking } from "./booking.entity";
import { CreateBookingDto } from "./dto/create-booking.dto";
export declare class BookingController {
    private bookingService;
    constructor(bookingService: BookingService);
    getAll(): Promise<Booking[]>;
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
}
