import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { InstitutionsController } from './institutions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from 'src/entities/institution.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Institution])
  ],
  controllers: [InstitutionsController],
  providers: [InstitutionsService],
  exports: [InstitutionsService]
})
export class InstitutionsModule {}
