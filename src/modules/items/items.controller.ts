import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { AddTypeDto } from './dto/add-type.dto';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
// import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post(':place')
  create(@Param('place') place: string, @Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(place, createItemDto);
  }

  @Get()
  // @ApiPaginatedResponse()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10
  ) {
    const options: IPaginationOptions = {
      limit,
      page
    }
    return await this.itemsService.paginate(options);
  }

  @Get(':id')
  findOne (@Param('id') id: number) {
    return this.itemsService.findById(id);
  }

  @Patch()
  async addType(@Body() addTypeDto: AddTypeDto){
    // console.log("hola")
    return await this.itemsService.addType(addTypeDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.itemsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
  //   return this.itemsService.update(+id, updateItemDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.itemsService.remove(+id);
  // }
}
