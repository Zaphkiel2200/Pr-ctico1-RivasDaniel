import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from './entities/room.entity';
import { ScreeningEntity } from 'src/screenings/entities/screening.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity,ScreeningEntity])],
  controllers: [RoomsController],
  providers: [RoomsService]
})
export class RoomsModule {}