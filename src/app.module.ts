import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/orm.config';
import { InstitutionsModule } from './modules/institutions/institutions.module';
import { PlacesModule } from './modules/places/places.module';
import { ItemsModule } from './modules/items/items.module';
import { SchedulesModule } from './modules/schedules/schedules.module';
import { TypesModule } from './modules/types/types.module';
import { ReservesModule } from './modules/reserves/reserves.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }),
  TypeOrmModule.forRoot({
    ... DataSourceConfig
  }),
  InstitutionsModule,
  PlacesModule,
  ItemsModule,
  SchedulesModule,
  TypesModule,
  ReservesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
