import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from 'src/entities/place.entity';
import { Item } from 'src/entities/item.entity';
import { PlacesModule } from '../places/places.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item, Place]),
    PlacesModule
  ],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
