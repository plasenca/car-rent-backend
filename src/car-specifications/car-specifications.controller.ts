import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarSpecificationsService } from './car-specifications.service';
import { CreateCarSpecificationDto } from './dto/create-car-specification.dto';
import { UpdateCarSpecificationDto } from './dto/update-car-specification.dto';
import { PaginationDto } from '@/shared/dtos/pagination.dto';

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
  findAll(@Query() pagination: PaginationDto) {
    return this.carSpecificationsService.findAll(pagination);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carSpecificationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarSpecificationDto: UpdateCarSpecificationDto,
  ) {
    return this.carSpecificationsService.update(id, updateCarSpecificationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.carSpecificationsService.remove(id);
  }
}
