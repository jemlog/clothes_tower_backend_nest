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
    console.log(body.action.parameters.date);

    const response = {
      version: '2.0',
      resultCode: 'OK',
      output: {
        datetime: '오늘',
        date: 'YESTERDAY',
        isValidTime: '응답완료',
      },
      directives: [
        {
          type: 'AudioPlayer.Play',
          audioItem: {
            stream: {
              url: '{{STRING}}',
              offsetInMilliseconds: 1000,
              progressReport: {
                progressReportDelayInMilliseconds: 1000,
                progressReportIntervalInMilliseconds: 1000,
              },
              token: '{{STRING}}',
              expectedPreviousToken: '{{STRING}}',
            },
            metadata: {}, // reserved
          },
        },
      ],
    };
    return response;
  }
}
