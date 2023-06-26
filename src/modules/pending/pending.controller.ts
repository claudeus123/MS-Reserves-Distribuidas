import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PendingService } from './pending.service';


@Controller('pending')
export class PendingController {
  constructor(private readonly pendingService: PendingService) {}

  @Post(':id')
  async create(@Param('id') id: number) {
    return this.pendingService.changePending(id);
  }

  
}
