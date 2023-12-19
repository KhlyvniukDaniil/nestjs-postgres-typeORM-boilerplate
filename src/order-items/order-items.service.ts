import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from 'src/order-items/order-items.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemsRepository: Repository<OrderItem>,
  ) {}

  async getAll(): Promise<OrderItem[]> {
    return this.orderItemsRepository.find();
  }

  async getById(id: number): Promise<OrderItem> {
    return this.orderItemsRepository.findOne({
      where: { id },
      relations: ['order', 'dish'],
    });
  }

  async create(orderData: Partial<OrderItem>): Promise<OrderItem> {
    const newOrderItem = this.orderItemsRepository.create(orderData);
    return this.orderItemsRepository.save(newOrderItem);
  }

  async edit(
    id: number,
    orderItemData: Partial<OrderItem>,
  ): Promise<OrderItem> {
    await this.orderItemsRepository.update(id, orderItemData);
    return this.orderItemsRepository.findOne({
      where: { id },
      relations: ['order', 'dish'],
    });
  }

  async delete(id: number): Promise<void> {
    await this.orderItemsRepository.delete(id);
  }
}
