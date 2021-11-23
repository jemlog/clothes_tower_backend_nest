import { Test, TestingModule } from '@nestjs/testing';
import { AnswerWeatherService } from './answer-weather.service';

describe('AnswerWeatherService', () => {
  let service: AnswerWeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswerWeatherService],
    }).compile();

    service = module.get<AnswerWeatherService>(AnswerWeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
