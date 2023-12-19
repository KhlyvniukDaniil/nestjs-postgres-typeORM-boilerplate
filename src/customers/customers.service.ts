import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from 'src/customers/customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}

  async getAll(): Promise<Customer[]> {
    return this.customersRepository.find();
  }

  async getById(id: number): Promise<Customer> {
    const customer = await this.customersRepository.findOne({ where: { id } });

    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }

    return customer;
  }

  async delete(id: number): Promise<Customer> {
    const deleteCandidate = await this.customersRepository.findOne({
      where: { id },
    });
    const result = await this.customersRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }

    return deleteCandidate;
  }

  async edit(id: number, body: Partial<Customer>): Promise<Customer> {
    await this.customersRepository.update(id, body);
    const editedCustomer = await this.customersRepository.findOne({
      where: { id },
    });

    if (!editedCustomer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }

    return editedCustomer;
  }

  async create(body: Partial<Customer>): Promise<Customer> {
    const newCustomer = this.customersRepository.create(body);
    return this.customersRepository.save(newCustomer);
  }
}
