import { AnswerWeatherService } from './answer-weather.service';
import { ClothService } from './../cloth/cloth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('answer-weather')
export class AnswerWeatherController {
  constructor(private readonly answerWeatherService: AnswerWeatherService) {}

  @Get('/')
  test() {
    const response = {
      version: '2.0',
      resultCode: 'OK',
      output: {
        message: '응답완료',
      },
      directives: [],
    };
    return JSON.stringify(response);
  }

  @Post('/')
  getParameters(@Body() body) {
    console.log(body.action.parameters.date);

    const response = {
      version: '2.0',
      resultCode: 'OK',
      output: {
        message: '응답완료',
      },
      directives: [],
    };
    return {
      version: '2.0',
      resultCode: 'OK',
      output: {
        date: 'TODAY',
        message: 'result',
      },
      directives: [],
    };
  }
}
