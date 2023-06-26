import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { Place } from 'src/entities/place.entity';
// import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post(':institution')
  async create(@Param('institution') institution: string, @Body() createPlaceDto: CreatePlaceDto): Promise<Place>  {
    return await this.placesService.create(institution, createPlaceDto);
  }

  @Get()
  async findAll(): Promise<Place[]>  {
    return await this.placesService.findAll();
  }

  @Get(':city')
  async findInCity(@Param('city') city: string): Promise<Place[]>  {
    return this.placesService.findInCity(city);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.placesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
  //   return this.placesService.update(+id, updatePlaceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.placesService.remove(+id);
  // }
}
