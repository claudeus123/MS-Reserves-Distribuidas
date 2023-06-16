import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
// import { UpdateTypeDto } from './dto/update-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from 'src/entities/type.entity';
import { Repository } from 'typeorm';
import { Schedule } from 'src/entities/schedule.entity';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type) private typeRepository: Repository<Type>,
    @InjectRepository(Schedule) private scheduleRepository: Repository<Schedule>
  ){}

  async create(createTypeDto: CreateTypeDto) {
    const type = this.typeRepository.create(createTypeDto);
    return await this.typeRepository.save(type);
  }

  async addSchedule(type: string, scheduleName: string){
    const reservationType = await this.typeRepository.findOne({
      where: {name: type}, relations: ['schedules']
    })
    if (!reservationType) return null;

    const schedule = await this.scheduleRepository.findOne({
      where: {name: scheduleName}
    })
    if (!schedule) return null;

    
    reservationType.schedules.push(schedule)
    return await  this.typeRepository.save(reservationType);
  }
  async findAll(){
    return await this.typeRepository.find({
      relations: ["schedules"]
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} type`;
  // }

  // update(id: number, updateTypeDto: UpdateTypeDto) {
  //   return `This action updates a #${id} type`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} type`;
  // }
}
