import { Test, TestingModule } from '@nestjs/testing';
import { AlienUserService } from '../alien-user.service';

describe('AlienUserService', () => {
  let service: AlienUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlienUserService],
    }).compile();

    service = module.get<AlienUserService>(AlienUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
