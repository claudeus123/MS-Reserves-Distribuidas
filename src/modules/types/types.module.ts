import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'src/entities/type.entity';
import { Schedule } from 'src/entities/schedule.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Type, Schedule])
  ],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
