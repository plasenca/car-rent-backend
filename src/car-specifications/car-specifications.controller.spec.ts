import { Test, TestingModule } from '@nestjs/testing';
import { CarSpecificationsController } from './car-specifications.controller';
import { CarSpecificationsService } from './car-specifications.service';

describe('CarSpecificationsController', () => {
  let controller: CarSpecificationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarSpecificationsController],
      providers: [CarSpecificationsService],
    }).compile();

    controller = module.get<CarSpecificationsController>(
      CarSpecificationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
