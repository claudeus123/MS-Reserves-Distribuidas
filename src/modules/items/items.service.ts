import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
// import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from 'src/entities/item.entity';
import { Place } from 'src/entities/place.entity';
import { PlacesService } from '../places/places.service';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
    @InjectRepository(Place) private placeRepository: Repository<Place>,
    private placeService: PlacesService
  ){}
  async create(placeName: string, createItemDto: CreateItemDto) {
    const place = await this.placeService.findOne(placeName);

    const item = this.itemRepository.create(createItemDto);
    item.place = place;
    return await this.itemRepository.save(item);
  }

  async findAll() {
    return await this.itemRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} item`;
  // }

  // update(id: number, updateItemDto: UpdateItemDto) {
  //   return `This action updates a #${id} item`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} item`;
  // }
}
