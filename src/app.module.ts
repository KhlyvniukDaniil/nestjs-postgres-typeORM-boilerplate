import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/config/postgres.config';
import { CouriersModule } from 'src/couriers/couriers.module';
import { CustomersModule } from 'src/customers/customers.module';
import { DeliveriesModule } from 'src/deliveries/deliveries.module';
import { DishesModule } from 'src/dishes/dishes.module';
import { OrderItemsModule } from 'src/order-items/order-items.module';
import { OrdersModule } from 'src/orders/orders.module';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CouriersModule,
    CustomersModule,
    DeliveriesModule,
    DishesModule,
    OrderItemsModule,
    OrdersModule,
    RestaurantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
