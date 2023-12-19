import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeliveriesService } from 'src/deliveries/deliveries.service';
import { Delivery } from 'src/deliveries/deliveries.entity';

@Controller('deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesSrv: DeliveriesService) {}

  @Get()
  async getAll(): Promise<Delivery[]> {
    return this.deliveriesSrv.getAll();
  }

  @Post()
  async create(@Body() data: Partial<Delivery>): Promise<Delivery> {
    return this.deliveriesSrv.create(data);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Delivery> {
    return this.deliveriesSrv.getById(id);
  }

  @Put(':id')
  async edit(
    @Param('id') id: number,
    @Body() data: Partial<Delivery>,
  ): Promise<Delivery> {
    return this.deliveriesSrv.edit(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Delivery> {
    return this.deliveriesSrv.delete(id);
  }
}
