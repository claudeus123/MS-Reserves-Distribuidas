import { Module } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { AvailabilityController } from './availability.controller';
import { ItemsModule } from '../items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserve } from 'src/entities/reserves.entity';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([Reserve]),
    ItemsModule
  ],
  controllers: [AvailabilityController],
  providers: [AvailabilityService]
})
export class AvailabilityModule {}
