import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from 'src/restaurants/restaurants.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  async getAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  async getById(id: number): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.findOne({
      where: { id },
    });

    if (!restaurant) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }

    return restaurant;
  }

  async delete(id: number): Promise<Restaurant> {
    const deleteCandidate = await this.restaurantRepository.findOne({
      where: { id },
    });
    const result = await this.restaurantRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }

    return deleteCandidate;
  }

  async edit(id: number, body: Partial<Restaurant>): Promise<Restaurant> {
    await this.restaurantRepository.update(id, body);
    const editedRestaurant = await this.restaurantRepository.findOne({
      where: { id },
    });

    if (!editedRestaurant) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }

    return editedRestaurant;
  }

  async create(body: Partial<Restaurant>): Promise<Restaurant> {
    const newRestaurant = this.restaurantRepository.create(body);
    return this.restaurantRepository.save(newRestaurant);
  }
}
