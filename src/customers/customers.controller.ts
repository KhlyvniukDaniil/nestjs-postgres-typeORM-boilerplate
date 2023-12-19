import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';
import { Customer } from 'src/customers/customers.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerSrv: CustomersService) {}

  @Get()
  async getAll(): Promise<Customer[]> {
    return this.customerSrv.getAll();
  }

  @Post()
  async create(@Body() data: Partial<Customer>): Promise<Customer> {
    return this.customerSrv.create(data);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Customer> {
    return this.customerSrv.getById(id);
  }

  @Put(':id')
  async edit(
    @Param('id') id: number,
    @Body() data: Partial<Customer>,
  ): Promise<Customer> {
    return this.customerSrv.edit(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Customer> {
    return this.customerSrv.delete(id);
  }
}
