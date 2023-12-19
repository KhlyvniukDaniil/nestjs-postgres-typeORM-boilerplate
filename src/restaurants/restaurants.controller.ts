import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Restaurant } from 'src/restaurants/restaurants.entity';
import { RestaurantsService } from 'src/restaurants/restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsSrv: RestaurantsService) {}

  @Get()
  async getAll(): Promise<Restaurant[]> {
    return this.restaurantsSrv.getAll();
  }

  @Post()
  async create(@Body() data: Partial<Restaurant>): Promise<Restaurant> {
    return this.restaurantsSrv.create(data);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Restaurant> {
    return this.restaurantsSrv.getById(id);
  }

  @Put(':id')
  async edit(
    @Param('id') id: number,
    @Body() data: Partial<Restaurant>,
  ): Promise<Restaurant> {
    return this.restaurantsSrv.edit(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Restaurant> {
    return this.restaurantsSrv.delete(id);
  }
}
