import { Module } from '@nestjs/common';
import { PendingService } from './pending.service';
import { PendingController } from './pending.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserve } from 'src/entities/reserves.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserve])],
  controllers: [PendingController],
  providers: [PendingService]
})
export class PendingModule {}
