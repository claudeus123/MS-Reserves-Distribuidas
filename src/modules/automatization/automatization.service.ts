import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserve } from 'src/entities/reserves.entity';
import { Repository } from 'typeorm';
import {  isAfter, isBefore, isEqual } from 'date-fns';

@Injectable()
export class AutomatizationService {
    constructor(
        @InjectRepository(Reserve) private reserveRepository: Repository<Reserve>
    ){}

    // @Cron('0 * * * *') 
    // async updateReserves(): Promise<void> {
    //     const reserves = await this.reserveRepository.find();
    //     // console.log(reserves[0].end_time.replace(':',''));
    //     const actualTime = new Date().toString().split(' ')[4].split(':')[0] + new Date().toString().split(' ')[4].split(':')[1]
    //     // console.log(actualTime)
    //     reserves.forEach((reserve) => {
    //         if (!isEqual(new Date(), new Date(reserve.start_date)) && reserve.end_date === null) reserve.available = true;
    //         // if (reserve.end_date === null && isEqual(new Date(), new Date(reserve.start_date)) && reserve.end_time.replace(':','') < actualTime) reserve.available = true;
    //         // if(reserve.end_date !== null && isAfter(new Date(), new Date(reserve.end_date))) reserve.available = true;
    //         if(reserve.end_date !== null && isAfter(new Date(), new Date(reserve.end_date)) || (reserve.end_date !== null && isEqual(new Date(), new Date(reserve.end_date)) && reserve.end_time.replace(':','') < actualTime)) reserve.available = true;
    //         // console.log(reserve.end_date);
    //         // console.log(isEqual(new Date(), new Date(reserve.start_date)))
    //         // console.log(reserve.end_time.replace(':','') < actualTime)
    //         console.log(reserve.end_date === null);
    //     });

    //     console.log(reserves);
    // }

}
