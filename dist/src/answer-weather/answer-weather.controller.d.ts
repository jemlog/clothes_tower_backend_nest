import { AnswerWeatherService } from './answer-weather.service';
export declare class AnswerWeatherController {
    private readonly answerWeatherService;
    constructor(answerWeatherService: AnswerWeatherService);
    test(): {
        version: string;
        resultCode: string;
        output: {
            date: {
                type: string;
                value: string;
            };
            isValidTime: string;
        };
    };
    getParameters(body: any): {
        version: string;
        resultCode: string;
        output: {
            date: {
                type: string;
                value: string;
            };
            isValidTime: string;
        };
    };
}
