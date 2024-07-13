import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarSpecificationsService } from './car-specifications.service';
import { CreateCarSpecificationDto } from './dto/create-car-specification.dto';
import { UpdateCarSpecificationDto } from './dto/update-car-specification.dto';

@Controller('car-specifications')
export class CarSpecificationsController {
  constructor(
    private readonly carSpecificationsService: CarSpecificationsService,
  ) {}

  @Post()
  create(@Body() createCarSpecificationDto: CreateCarSpecificationDto) {
    return this.carSpecificationsService.create(createCarSpecificationDto);
  }

  @Get()
  findAll() {
    return this.carSpecificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carSpecificationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarSpecificationDto: UpdateCarSpecificationDto,
  ) {
    return this.carSpecificationsService.update(+id, updateCarSpecificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carSpecificationsService.remove(+id);
  }
}
