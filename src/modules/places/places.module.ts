import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from '../../entities/place.entity';
import { Institution } from 'src/entities/institution.entity';
import { InstitutionsModule } from '../institutions/institutions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Institution, Place]),
    InstitutionsModule
  ],
  controllers: [PlacesController],
  providers: [PlacesService],
  exports: [PlacesService]
})
export class PlacesModule {}
