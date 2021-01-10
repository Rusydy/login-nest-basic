import { Test, TestingModule } from '@nestjs/testing';
import { AlienUserController } from '../alien-user.controller';

describe('AlienUserController', () => {
  let controller: AlienUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlienUserController],
    }).compile();

    controller = module.get<AlienUserController>(AlienUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
