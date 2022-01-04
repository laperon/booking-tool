import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RoomsEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column({ default: true })
    isActive: boolean;
}