import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/orders/orders.entity';
import { OrderService } from 'src/orders/orders.service';
import { OrdersController } from 'src/orders/orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [OrderService],
  controllers: [OrdersController],
  exports: [OrderService],
})
export class OrdersModule {}
