import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderItemsService } from 'src/order-items/order-items.service';
import { OrderItem } from 'src/order-items/order-items.entity';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsSrv: OrderItemsService) {}

  @Get()
  async getAll(): Promise<OrderItem[]> {
    return this.orderItemsSrv.getAll();
  }

  @Post()
  async create(@Body() data: Partial<OrderItem>): Promise<OrderItem> {
    return this.orderItemsSrv.create(data);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<OrderItem> {
    return this.orderItemsSrv.getById(id);
  }

  @Put(':id')
  async edit(
    @Param('id') id: number,
    @Body() data: Partial<OrderItem>,
  ): Promise<OrderItem> {
    return this.orderItemsSrv.edit(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.orderItemsSrv.delete(id);
  }
}
