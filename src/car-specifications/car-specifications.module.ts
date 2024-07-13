import { Module } from '@nestjs/common';
import { CarSpecificationsService } from './car-specifications.service';
import { CarSpecificationsController } from './car-specifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarSpecification } from '@/car-specifications/entities/car-specification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarSpecification])],
  controllers: [CarSpecificationsController],
  providers: [CarSpecificationsService],
})
export class CarSpecificationsModule {}
