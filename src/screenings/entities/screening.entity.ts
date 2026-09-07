import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoomEntity } from 'src/rooms/entities/room.entity';

Entity('screenings')
export class ScreeningEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length:100 })
    movieTitle!: string;

    @Column()
    startsAt!: Date;

    @Column()
    status!: string;

    @ManyToOne(() => RoomEntity, (rooms) => rooms.screenings,{
        nullable: false,
    })
    @JoinColumn({ name: 'room_id' })
    room!: RoomEntity
}