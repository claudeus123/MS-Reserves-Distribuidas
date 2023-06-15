import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from 'src/entities/schedule.entity';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule) private scheduleRepository: Repository<Schedule>
    
  ){}

  async create(createScheduleDto: CreateScheduleDto) {
      const schedule = this.scheduleRepository.create(createScheduleDto);
      return await this.scheduleRepository.save(schedule);
  }

  async findAll(){
    return await this.scheduleRepository.find();
  }

  
}
