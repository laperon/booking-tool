import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  first_name: string;

  @Column()
  second_name: string;

  @Column({ default: true })
  isActive: boolean;
}