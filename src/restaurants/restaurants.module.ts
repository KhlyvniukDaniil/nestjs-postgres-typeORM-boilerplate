import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { RestaurantsController } from 'src/restaurants/restaurants.controller';
import { Restaurant } from 'src/restaurants/restaurants.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantsService],
  controllers: [RestaurantsController],
  exports: [RestaurantsService],
})
export class RestaurantsModule {}
