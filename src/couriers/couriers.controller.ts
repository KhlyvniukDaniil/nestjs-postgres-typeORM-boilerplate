import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Courier } from 'src/couriers/couriers.entity';
import { CouriersService } from 'src/couriers/couriers.service';

@Controller('couriers')
export class CouriersController {
  constructor(private readonly courierSrv: CouriersService) {}

  @Get()
  async getAll(): Promise<Courier[]> {
    return this.courierSrv.getAll();
  }

  @Post()
  async create(@Body() data: Partial<Courier>): Promise<Courier> {
    return this.courierSrv.create(data);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Courier> {
    return this.courierSrv.getById(id);
  }

  @Put(':id')
  async edit(
    @Param('id') id: number,
    @Body() data: Partial<Courier>,
  ): Promise<Courier> {
    return this.courierSrv.edit(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Courier> {
    return this.courierSrv.delete(id);
  }
}
