import { Test, TestingModule } from '@nestjs/testing';
import { AnswerWeatherController } from './answer-weather.controller';

describe('AnswerWeatherController', () => {
  let controller: AnswerWeatherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerWeatherController],
    }).compile();

    controller = module.get<AnswerWeatherController>(AnswerWeatherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
