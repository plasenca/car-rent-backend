import { Test, TestingModule } from '@nestjs/testing';
import { CarSpecificationsService } from './car-specifications.service';

describe('CarSpecificationsService', () => {
  let service: CarSpecificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarSpecificationsService],
    }).compile();

    service = module.get<CarSpecificationsService>(CarSpecificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
