import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Dish } from 'src/dishes/dishes.entity';
import { DishesService } from 'src/dishes/dishes.service';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesSrv: DishesService) {}

  @Get()
  async getAll(): Promise<Dish[]> {
    return this.dishesSrv.getAll();
  }

  @Post()
  async create(@Body() data: Partial<Dish>): Promise<Dish> {
    return this.dishesSrv.create(data);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Dish> {
    return this.dishesSrv.getById(id);
  }

  @Put(':id')
  async edit(
    @Param('id') id: number,
    @Body() data: Partial<Dish>,
  ): Promise<Dish> {
    return this.dishesSrv.edit(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Dish> {
    return this.dishesSrv.delete(id);
  }
}
