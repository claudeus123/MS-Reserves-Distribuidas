import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserve } from 'src/entities/reserves.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PendingService {
  constructor(
    @InjectRepository(Reserve) private reserveRepository: Repository<Reserve>
  ){}

  async changePending(id: number): Promise<Reserve>{
    
    const reserve = await this.reserveRepository.findOne({
      where: { id: id },
    })
    
    if(!reserve) return null;
    reserve.pending = false;
    
    return this.reserveRepository.save(reserve);
  }
  
}
