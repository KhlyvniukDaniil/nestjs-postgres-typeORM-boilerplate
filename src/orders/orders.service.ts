import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from 'src/orders/orders.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async getAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  async getById(id: number): Promise<Order> {
    return this.orderRepository.findOne({
      where: { id },
      relations: ['client'],
    });
  }

  async create(orderData: Partial<Order>): Promise<Order> {
    const newOrder = this.orderRepository.create(orderData);
    return this.orderRepository.save(newOrder);
  }

  async edit(id: number, orderData: Partial<Order>): Promise<Order> {
    await this.orderRepository.update(id, orderData);
    return this.orderRepository.findOne({
      where: { id },
      relations: ['client'],
    });
  }

  async delete(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
