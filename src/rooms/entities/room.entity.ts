import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ScreeningEntity } from 'src/screenings/entities/screening.entity';
@Entity('rooms')
export class RoomEntity{
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ length:100 })
    name!: string;

    @Column()
    capacity!: number;

    @OneToMany(() => ScreeningEntity, (screening)=> screening.room)
    screenings!: ScreeningEntity[];
}