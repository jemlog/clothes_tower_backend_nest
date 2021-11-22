import { Module } from '@nestjs/common';
import { AnswerWeatherController } from './answer-weather.controller';

@Module({
  controllers: [AnswerWeatherController]
})
export class AnswerWeatherModule {}
