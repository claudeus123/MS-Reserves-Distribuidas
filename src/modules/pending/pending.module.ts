import { Module } from '@nestjs/common';
import { PendingService } from './pending.service';
import { PendingController } from './pending.controller';

@Module({
  controllers: [PendingController],
  providers: [PendingService]
})
export class PendingModule {}
