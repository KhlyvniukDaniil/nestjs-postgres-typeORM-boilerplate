import { Module } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';
import { CustomersController } from 'src/customers/customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customers/customers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomersService],
  controllers: [CustomersController],
  exports: [CustomersService],
})
export class CustomersModule {}
