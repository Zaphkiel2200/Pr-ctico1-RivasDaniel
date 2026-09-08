import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
    constructor(
        @InjectRepository(RoomEntity)
        private readonly roomRepository: Repository<RoomEntity>,
    ) {}
    
}