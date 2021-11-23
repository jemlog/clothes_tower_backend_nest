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
        // date: { type: 'BID_DT_DAY', value: 'YESTERDAY' },
        isValidTime: '응답완료',
      },
    };
    return response;
  }

  @Post('/')
  getParameters(@Body() body) {
    console.log(body);

    const response = {
      version: '2.0',
      resultCode: 'OK',
      output: {
        // date: { type: 'BID_DT_DAY', value: 'YESTERDAY' },
        isValidTime: '응답완료',
      },
    };
    return response;
  }
}
