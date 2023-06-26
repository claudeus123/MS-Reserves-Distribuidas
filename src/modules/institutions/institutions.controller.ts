import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { Institution } from 'src/entities/institution.entity';
// import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Post()
  async create(@Body() createInstitutionDto: CreateInstitutionDto): Promise<Institution> {
    return await this.institutionsService.create(createInstitutionDto);
  }

  @Get()
  async findAll(): Promise<Institution[]> {
    return await this.institutionsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.institutionsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateInstitutionDto: UpdateInstitutionDto) {
  //   return this.institutionsService.update(+id, updateInstitutionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.institutionsService.remove(+id);
  // }
}
