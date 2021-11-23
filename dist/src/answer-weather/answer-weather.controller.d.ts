import { AnswerWeatherService } from './answer-weather.service';
export declare class AnswerWeatherController {
    private readonly answerWeatherService;
    constructor(answerWeatherService: AnswerWeatherService);
    test(): string;
    getParameters(body: any): {
        version: string;
        resultCode: string;
        output: {
            datetime: string;
            date: string;
            isValidTime: string;
        };
        directives: {
            type: string;
            audioItem: {
                stream: {
                    url: string;
                    offsetInMilliseconds: number;
                    progressReport: {
                        progressReportDelayInMilliseconds: number;
                        progressReportIntervalInMilliseconds: number;
                    };
                    token: string;
                    expectedPreviousToken: string;
                };
                metadata: {};
            };
        }[];
    };
}
