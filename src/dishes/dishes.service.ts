import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from 'src/dishes/dishes.entity';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  async getAll(): Promise<Dish[]> {
    return this.dishRepository.find();
  }

  async getById(id: number): Promise<Dish> {
    const dish = await this.dishRepository.findOne({
      where: { id },
    });

    if (!dish) {
      throw new NotFoundException(`Dish with ID ${id} not found`);
    }

    return dish;
  }

  async delete(id: number): Promise<Dish> {
    const deleteCandidate = await this.dishRepository.findOne({
      where: { id },
    });
    const result = await this.dishRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Dish with ID ${id} not found`);
    }

    return deleteCandidate;
  }

  async edit(id: number, body: Partial<Dish>): Promise<Dish> {
    await this.dishRepository.update(id, body);
    const editedDish = await this.dishRepository.findOne({
      where: { id },
    });

    if (!editedDish) {
      throw new NotFoundException(`Dish with ID ${id} not found`);
    }

    return editedDish;
  }

  async create(body: Partial<Dish>): Promise<Dish> {
    const newDish = this.dishRepository.create(body);
    return this.dishRepository.save(newDish);
  }
}
