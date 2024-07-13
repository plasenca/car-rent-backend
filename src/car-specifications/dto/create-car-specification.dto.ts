import { Transform, Type } from 'class-transformer';
import {
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { Transmission } from '../entities/car-specification.entity';
import { ToTwoDecimalPlaces } from '@/shared/transformers/to-two-decimal-places.transformer';

export class CreateCarSpecificationDto {
  @IsString()
  @IsNotEmpty()
  fuel: string;

  @IsEnum(Transmission)
  transmission: Transmission;

  @IsPositive()
  @Type(() => Number)
  @Transform(ToTwoDecimalPlaces())
  capacity: number;
}
