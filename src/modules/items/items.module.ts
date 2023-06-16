import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from 'src/entities/place.entity';
import { Item } from 'src/entities/item.entity';
import { PlacesModule } from '../places/places.module';
import { Schedule } from 'src/entities/schedule.entity';
import { Type } from 'src/entities/type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item, Place, Schedule, Type]),
    PlacesModule
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService]
})
export class ItemsModule {}
