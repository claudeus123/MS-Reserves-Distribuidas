import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { InstitutionsService } from '../institutions/institutions.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from 'src/entities/institution.entity';
import { Repository } from 'typeorm';
import { Place } from 'src/entities/place.entity';

@Injectable()
export class PlacesService {
  
  constructor(
    @InjectRepository(Institution) private institutionRepository: Repository<Institution>,
    @InjectRepository(Place) private placeRepository: Repository<Place>,
    private institutionService: InstitutionsService
    ){}
    async create(institutionName: string, createPlaceDto: CreatePlaceDto) {
      const institution = await this.institutionService.findOne(institutionName);
      
      const place = this.placeRepository.create(createPlaceDto);
      place.institution = institution;
      return await this.placeRepository.save(place);
    }
    
    async findInCity(city: string) {
      return await this.placeRepository.find({
        where: { city: city},
        relations: ['items']
      });
    }
  async findAll() {
    return await this.placeRepository.find({
      relations: ['items']
    });
  }

  async findOne(name: string) {
    const institution = await this.placeRepository.findOne({
      where: {
        name: name
      }
    });
    return institution;
  }

  // update(id: number, updatePlaceDto: UpdatePlaceDto) {
  //   return `This action updates a #${id} place`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} place`;
  // }
}
