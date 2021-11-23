import { AnswerWeatherService } from './answer-weather.service';
export declare class AnswerWeatherController {
    private readonly answerWeatherService;
    constructor(answerWeatherService: AnswerWeatherService);
    test(): string;
    getParameters(body: any): {
        version: string;
        resultCode: string;
        output: {
            date: string;
            message: string;
        };
        directives: any[];
    };
}
