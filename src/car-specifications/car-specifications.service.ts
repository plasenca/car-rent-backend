import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarSpecificationDto } from './dto/create-car-specification.dto';
import { UpdateCarSpecificationDto } from './dto/update-car-specification.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarSpecification } from './entities/car-specification.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from '../shared/dtos/pagination.dto';

@Injectable()
export class CarSpecificationsService {
  constructor(
    @InjectRepository(CarSpecification)
    private readonly carSpecificationRepository: Repository<CarSpecification>,
  ) {}

  async create(createCarSpecificationDto: CreateCarSpecificationDto) {
    const carSpecification = this.carSpecificationRepository.create(
      createCarSpecificationDto,
    );

    return await this.carSpecificationRepository.save(carSpecification);
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, page = 1 } = paginationDto;

    const offset = (page - 1) * limit;

    return await this.carSpecificationRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const carSpecification = await this.carSpecificationRepository.find({
      where: {
        id,
      },
    });

    if (!carSpecification) {
      throw new NotFoundException(
        `Car specification with id: ${id} not found}`,
      );
    }

    return carSpecification;
  }

  async update(
    id: string,
    updateCarSpecificationDto: UpdateCarSpecificationDto,
  ) {
    const carSpecification = await this.carSpecificationRepository.preload({
      id,
      ...updateCarSpecificationDto,
    });

    if (!carSpecification) {
      throw new NotFoundException(
        `Car specification with id: ${id} not found}`,
      );
    }

    return await this.carSpecificationRepository.save(carSpecification);
  }

  async remove(id: string) {
    return `This action removes a #${id} carSpecification`;
  }
}
