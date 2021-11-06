"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const cloth_module_1 = require("./cloth/cloth.module");
const logger_middleware_1 = require("./middleware/logger.middleware");
const cloth_controller_1 = require("./cloth/cloth.controller");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const dotenv = require("dotenv");
const configuration_1 = require("./config/configuration");
dotenv.config();
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.logger)
            .exclude({ path: 'cloth', method: common_1.RequestMethod.POST })
            .forRoutes(cloth_controller_1.ClothController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            cloth_module_1.ClothModule,
            common_1.CacheModule.register(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: process.env.NODE_ENV == 'dev' ? '.env.dev' : '.env.prod',
                ignoreEnvFile: process.env.NODE_ENV === 'prod',
                load: [configuration_1.default],
                validationSchema: Joi.object({
                    DB_PASSWORD: Joi.string().required(),
                }),
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map