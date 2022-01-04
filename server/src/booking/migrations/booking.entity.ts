import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name_surname: string;

  @Column()
  location: string;

  @Column()
  days: number;

  @Column()
  first_day: string;

  @Column()
  room: string;

  @Column()
  vaccinated: boolean;

  @Column()
  wishes: string;
}