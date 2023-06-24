import { Controller } from '@nestjs/common';
import { AutomatizationService } from './automatization.service';

@Controller('automatization')
export class AutomatizationController {
  constructor(private readonly automatizationService: AutomatizationService) {}
}
