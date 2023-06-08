import { Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Institution } from 'src/entities/institution.entity';
// import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Injectable()
export class InstitutionsService {
  constructor(
    @InjectRepository(Institution) private institutionRepository: Repository<Institution>,
  ){}

  async create(createInstitutionDto: CreateInstitutionDto) {
    const institution = this.institutionRepository.create(createInstitutionDto);
    return await this.institutionRepository.save(institution);
  }

  async findAll() {
    return await this.institutionRepository.find({
      relations: ['places']
    });
  }

  async findOne(name: string) {
    const institution = await this.institutionRepository.findOne({
      where: {
        name: name
      }
    });
    return institution;
  }

  // update(id: number, updateInstitutionDto: UpdateInstitutionDto) {
  //   return `This action updates a #${id} institution`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} institution`;
  // }
}
