import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { AddScheduleDto } from './dto/add-schedule.dto';
import { Type } from 'src/entities/type.entity';
// import { UpdateTypeDto } from './dto/update-type.dto';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  async create(@Body() createTypeDto: CreateTypeDto): Promise<Type> {
    return await this.typesService.create(createTypeDto);
  }

  @Post('add')
  async addSchedule(@Body() addScheduleDto: AddScheduleDto): Promise<Type> {
    return await this.typesService.addSchedule(addScheduleDto.type, addScheduleDto.scheduleName);
  }

  @Get()
  async getAll(): Promise<Type[]> {
    return await this.typesService.findAll();
  }

  
}
