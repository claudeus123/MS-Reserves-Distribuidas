import { Module } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { ReservesController } from './reserves.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserve } from 'src/entities/reserves.entity';
import { Item } from 'src/entities/item.entity';
import { ItemsModule } from '../items/items.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reserve, Item]),
    ItemsModule
  ],
  controllers: [ReservesController],
  providers: [ReservesService]
})
export class ReservesModule {}
