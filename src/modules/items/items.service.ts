import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
// import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from 'src/entities/item.entity';
import { Place } from 'src/entities/place.entity';
import { PlacesService } from '../places/places.service';
import { AddTypeDto } from './dto/add-type.dto';
import { Type } from 'src/entities/type.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
    @InjectRepository(Place) private placeRepository: Repository<Place>,
    @InjectRepository(Type) private typeRepository: Repository<Type>,
    private placeService: PlacesService
    ){}
    async create(placeName: string, createItemDto: CreateItemDto) {
      const place = await this.placeService.findOne(placeName);
      
      const item = this.itemRepository.create(createItemDto);
      item.place = place;
      return await this.itemRepository.save(item);
    }
    
    async findOne(item: string) {
      // console.log(item);
      const itemObject = await this.itemRepository.findOne({
        where: {name: item}, 
        relations: ['type','reserves']
      })
      // console.log(itemObject)
      const type = await this.typeRepository.findOne({
        where: {name: itemObject.type.name},
        relations: ['schedules']
      })
      itemObject.type = type;
      // console.log(itemObject);
      return itemObject;
    }
  async findAll() {
    return await this.itemRepository.find({
      relations: ['type','reserves']
    });
  }

  async addType(addTypeDto: AddTypeDto) {
    const type = await this.typeRepository.findOne({
      where: {name: addTypeDto.typeName},
      relations: ['schedules']
    })

    const item = await this.itemRepository.findOne({
      where: {name: addTypeDto.itemName}
    })

    item.type = type;
    return await this.itemRepository.save(item);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} item`;
  // }

  // update(id: number, updateItemDto: UpdateItemDto) {
  //   return `This action updates a #${id} item`;
  // }

  async findById(id: number) {
    return await this.itemRepository.findOne({
      where: {id: id}, 
      relations: ['type','reserves']
    })
  }

  // remove(id: number) {
  //   return `This action removes a #${id} item`;
  // }
}
