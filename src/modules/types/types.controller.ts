import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { AddScheduleDto } from './dto/add-schedule.dto';
// import { UpdateTypeDto } from './dto/update-type.dto';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  async create(@Body() createTypeDto: CreateTypeDto) {
    return await this.typesService.create(createTypeDto);
  }

  @Post('add')
  async addSchedule(@Body() addScheduleDto: AddScheduleDto) {
    return await this.typesService.addSchedule(addScheduleDto.type, addScheduleDto.scheduleName);
  }

  @Get()
  async getAll() {
    return await this.typesService.findAll();
  }

  
}
