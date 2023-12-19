import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemsService } from 'src/order-items/order-items.service';
import { OrderItemsController } from 'src/order-items/order-items.controller';
import { OrderItem } from 'src/order-items/order-items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem])],
  providers: [OrderItemsService],
  controllers: [OrderItemsController],
  exports: [OrderItemsService],
})
export class OrderItemsModule {}
