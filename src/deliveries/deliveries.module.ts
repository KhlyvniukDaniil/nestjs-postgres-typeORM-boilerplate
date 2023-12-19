import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveriesService } from 'src/deliveries/deliveries.service';
import { DeliveriesController } from 'src/deliveries/deliveries.controller';
import { Delivery } from 'src/deliveries/deliveries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Delivery])],
  providers: [DeliveriesService],
  controllers: [DeliveriesController],
  exports: [DeliveriesService],
})
export class DeliveriesModule {}
