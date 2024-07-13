import { PartialType } from '@nestjs/mapped-types';
import { CreateCarSpecificationDto } from './create-car-specification.dto';

export class UpdateCarSpecificationDto extends PartialType(
  CreateCarSpecificationDto,
) {}
