import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Courier } from 'src/couriers/couriers.entity';

@Injectable()
export class CouriersService {
  constructor(
    @InjectRepository(Courier)
    private readonly courierRepository: Repository<Courier>,
  ) {}

  async getAll(): Promise<Courier[]> {
    return this.courierRepository.find();
  }

  async getById(id: number): Promise<Courier> {
    const courier = await this.courierRepository.findOne({ where: { id } });

    if (!courier) {
      throw new NotFoundException(`Courier with ID ${id} not found`);
    }

    return courier;
  }

  async delete(id: number): Promise<Courier> {
    const deleteCandidate = await this.courierRepository.findOne({
      where: { id },
    });
    const result = await this.courierRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Courier with ID ${id} not found`);
    }

    return deleteCandidate;
  }

  async edit(id: number, body: Partial<Courier>): Promise<Courier> {
    await this.courierRepository.update(id, body);
    const editedCourier = await this.courierRepository.findOne({
      where: { id },
    });

    if (!editedCourier) {
      throw new NotFoundException(`Courier with ID ${id} not found`);
    }

    return editedCourier;
  }

  async create(body: Partial<Courier>): Promise<Courier> {
    const newCourier = this.courierRepository.create(body);
    return this.courierRepository.save(newCourier);
  }
}
