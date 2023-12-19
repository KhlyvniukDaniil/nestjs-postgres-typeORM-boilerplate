import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Delivery } from 'src/deliveries/deliveries.entity';

@Injectable()
export class DeliveriesService {
  constructor(
    @InjectRepository(Delivery)
    private readonly deliveryRepository: Repository<Delivery>,
  ) {}

  async getAll(): Promise<Delivery[]> {
    return this.deliveryRepository.find();
  }

  async getById(id: number): Promise<Delivery> {
    const delivery = await this.deliveryRepository.findOne({
      where: { id },
    });

    if (!delivery) {
      throw new NotFoundException(`Delivery with ID ${id} not found`);
    }

    return delivery;
  }

  async delete(id: number): Promise<Delivery> {
    const deleteCandidate = await this.deliveryRepository.findOne({
      where: { id },
    });
    const result = await this.deliveryRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Delivery with ID ${id} not found`);
    }

    return deleteCandidate;
  }

  async edit(id: number, body: Partial<Delivery>): Promise<Delivery> {
    await this.deliveryRepository.update(id, body);
    const editedDelivery = await this.deliveryRepository.findOne({
      where: { id },
    });

    if (!editedDelivery) {
      throw new NotFoundException(`Dish with ID ${id} not found`);
    }

    return editedDelivery;
  }

  async create(body: Partial<Delivery>): Promise<Delivery> {
    const newDelivery = this.deliveryRepository.create(body);
    return this.deliveryRepository.save(newDelivery);
  }
}
