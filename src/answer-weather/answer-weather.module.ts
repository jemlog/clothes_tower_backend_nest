import { Module } from '@nestjs/common';
import { AnswerWeatherController } from './answer-weather.controller';
import { AnswerWeatherService } from './answer-weather.service';

@Module({
  controllers: [AnswerWeatherController],
  providers: [AnswerWeatherService]
})
export class AnswerWeatherModule {}
