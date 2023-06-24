import { Module } from '@nestjs/common';
import { AutomatizationService } from './automatization.service';
import { AutomatizationController } from './automatization.controller';
// import { ReservesService } from '../reserves/reserves.service';
import { ReservesModule } from '../reserves/reserves.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserve } from 'src/entities/reserves.entity';

@Module({
  imports: [ReservesModule, TypeOrmModule.forFeature([Reserve])],
  controllers: [AutomatizationController],
  providers: [AutomatizationService]
})
export class AutomatizationModule {}
