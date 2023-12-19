import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from 'src/dishes/dishes.entity';
import { DishesService } from 'src/dishes/dishes.service';
import { DishesController } from 'src/dishes/dishes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dish])],
  providers: [DishesService],
  controllers: [DishesController],
  exports: [DishesService],
})
export class DishesModule {}
