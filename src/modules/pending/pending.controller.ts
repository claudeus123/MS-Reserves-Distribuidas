import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PendingService } from './pending.service';
import { Reserve } from 'src/entities/reserves.entity';


@Controller('pending')
export class PendingController {
  constructor(private readonly pendingService: PendingService) {}

  @Post(':id')
  async changePending(@Param('id') id: number): Promise<Reserve> {
    return await this.pendingService.changePending(id);
  }

  
}
