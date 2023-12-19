import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderService } from 'src/orders/orders.service';
import { Order } from 'src/orders/orders.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderSrv: OrderService) {}

  @Get()
  async getAll(): Promise<Order[]> {
    return this.orderSrv.getAll();
  }

  @Post()
  async create(@Body() data: Partial<Order>): Promise<Order> {
    return this.orderSrv.create(data);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Order> {
    return this.orderSrv.getById(id);
  }

  @Put(':id')
  async edit(
    @Param('id') id: number,
    @Body() data: Partial<Order>,
  ): Promise<Order> {
    return this.orderSrv.edit(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.orderSrv.delete(id);
  }
}
