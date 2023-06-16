import { Injectable } from '@nestjs/common';
// import { CreateAvailabilityDto } from './dto/create-availability.dto';
// import { UpdateAvailabilityDto } from './dto/update-availability.dto';
import { ItemsService } from '../items/items.service';
import { format, isAfter, isBefore, isEqual } from 'date-fns';

@Injectable()
export class AvailabilityService {
    constructor(private itemService: ItemsService){}


    async getAvailability(item: string, schedule: string){
      const itemObject = await this.itemService.findOne(item);
      let blockSchedule: boolean = true;
      itemObject.type.schedules.forEach((schedule) => {
        if(schedule.day_quantity > 0) blockSchedule = false;
      })
      const currentDate = new Date();
      
      if (!itemObject.reserves[itemObject.reserves.length - 1].available) return false;
      if(!blockSchedule) {
        if(isBefore(currentDate, new Date(itemObject.reserves[itemObject.reserves.length - 1].start_date)) 
        || isAfter(currentDate, new Date(itemObject.reserves[itemObject.reserves.length - 1].end_date))) 
        return false;
      }
      return true;
    }
    // create(createAvailabilityDto: CreateAvailabilityDto) {
    //   return 'This action adds a new availability';
    // }

    // findAll() {
    //   return `This action returns all availability`;
    // }

    // findOne(id: number) {
    //   return `This action returns a #${id} availability`;
    // }

    // update(id: number, updateAvailabilityDto: UpdateAvailabilityDto) {
    //   return `This action updates a #${id} availability`;
    // }

    // remove(id: number) {
    //   return `This action removes a #${id} availability`;
    // }
}
