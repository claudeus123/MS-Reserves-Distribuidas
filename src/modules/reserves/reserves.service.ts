import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserve } from 'src/entities/reserves.entity';
import { Repository } from 'typeorm';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { Item } from 'src/entities/item.entity';
import { ItemsService } from '../items/items.service';
import { UpdateReserveDto } from './dto/update-reserve.dto';

@Injectable()
export class ReservesService {
    constructor(
        @InjectRepository(Reserve) private reserveRepository: Repository<Reserve>,
        @InjectRepository(Item) private itemRepository: Repository<Item>,
        private itemsService: ItemsService
    ){}

    async createReserve(createReserveDto: CreateReserveDto){
        const item = await this.itemsService.findOne(createReserveDto?.item_name);

        const reserve =  this.reserveRepository.create(createReserveDto);
        reserve.item = item;
        return await this.reserveRepository.save(reserve);
    }

    async removeReserve(updateReserveDto: UpdateReserveDto){
        const blockReserve = await this.reserveRepository.findOne({
            where: {
                client_id: updateReserveDto.client_id,
                start_time: updateReserveDto.start_time,
                available: false
            }, relations: ['item']
        });

        const dayReserve = await this.reserveRepository.findOne({
            where: {
                client_id: updateReserveDto.client_id,
                start_date: updateReserveDto.start_date,
                end_date: updateReserveDto.end_date,
                available: false
            }, relations: ['item']
        })

        if(!blockReserve || !dayReserve) return null;

        if (blockReserve.item.name === updateReserveDto.item_name){
            blockReserve.available = true;
            return await this.reserveRepository.save(blockReserve);
        }

        if(dayReserve.item.name === updateReserveDto.item_name){
            dayReserve.available = true;
            return await this.reserveRepository.save(dayReserve);
        }



    }

    async get(clientId: number){
        return await this.reserveRepository.find({
            where: {
                client_id: clientId,
                available: false
            }, relations: ['item']
        });
        
    }


}
