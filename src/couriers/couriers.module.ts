import { Module } from '@nestjs/common';
import { Courier } from 'src/couriers/couriers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouriersService } from 'src/couriers/couriers.service';
import { CouriersController } from 'src/couriers/couriers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Courier])],
  providers: [CouriersService],
  controllers: [CouriersController],
  exports: [CouriersService],
})
export class CouriersModule {}
