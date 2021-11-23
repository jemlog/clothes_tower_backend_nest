import { AnswerWeatherService } from './answer-weather.service';
import { ClothService } from './../cloth/cloth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('answer-weather')
export class AnswerWeatherController {
  constructor(private readonly answerWeatherService: AnswerWeatherService) {}

  @Get()
  test() {
    return 'nugu speacker backend proxy testing';
  }

  @Post('/')
  getParameters(@Body() body) {
    console.log(body);
    return body;
  }
}
