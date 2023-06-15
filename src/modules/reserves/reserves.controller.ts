import { Controller } from '@nestjs/common';
import { ReservesService } from './reserves.service';

@Controller('reserves')
export class ReservesController {
  constructor(private readonly reservesService: ReservesService) {}
}
