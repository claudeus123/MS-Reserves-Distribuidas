import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { Reserve } from 'src/entities/reserves.entity';

@Controller('reserves')
export class ReservesController {
  constructor(private readonly reservesService: ReservesService) {}

  @Post()
  async create(@Body() createReserveDto:CreateReserveDto): Promise<Reserve>{
    return await this.reservesService.createReserve(createReserveDto);
  }
  
  @Patch()
  async remove(@Body() createReserveDto:CreateReserveDto): Promise<Reserve>{
    return await this.reservesService.removeReserve(createReserveDto);
  }

  @Patch(':id')
  async removeById(@Param('id') id: number): Promise<Reserve>{
    return await this.reservesService.removeReserveById(id);
  }

  @Get(':clientId')
  async get(@Param('clientId') clientId: number): Promise<Reserve[]>{
    return await this.reservesService.get(clientId);

  }

}
