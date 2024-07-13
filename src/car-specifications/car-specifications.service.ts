import { Injectable } from '@nestjs/common';
import { CreateCarSpecificationDto } from './dto/create-car-specification.dto';
import { UpdateCarSpecificationDto } from './dto/update-car-specification.dto';

@Injectable()
export class CarSpecificationsService {
  create(createCarSpecificationDto: CreateCarSpecificationDto) {
    return 'This action adds a new carSpecification';
  }

  findAll() {
    return `This action returns all carSpecifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carSpecification`;
  }

  update(id: number, updateCarSpecificationDto: UpdateCarSpecificationDto) {
    return `This action updates a #${id} carSpecification`;
  }

  remove(id: number) {
    return `This action removes a #${id} carSpecification`;
  }
}
