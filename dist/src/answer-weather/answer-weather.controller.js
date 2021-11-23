"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerWeatherController = void 0;
const openapi = require("@nestjs/swagger");
const answer_weather_service_1 = require("./answer-weather.service");
const common_1 = require("@nestjs/common");
let AnswerWeatherController = class AnswerWeatherController {
    constructor(answerWeatherService) {
        this.answerWeatherService = answerWeatherService;
    }
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
    getParameters(body) {
        console.log(body);
        const response = {
            version: '2.0',
            resultCode: 'OK',
            output: {
                date: '오늘',
                message: 'result',
            },
        };
        return JSON.stringify(response);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnswerWeatherController.prototype, "test", null);
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnswerWeatherController.prototype, "getParameters", null);
AnswerWeatherController = __decorate([
    (0, common_1.Controller)('answer-weather'),
    __metadata("design:paramtypes", [answer_weather_service_1.AnswerWeatherService])
], AnswerWeatherController);
exports.AnswerWeatherController = AnswerWeatherController;
//# sourceMappingURL=answer-weather.controller.js.map