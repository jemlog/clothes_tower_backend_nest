import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothModule } from './cloth/cloth.module';

import { ClothController } from './cloth/cloth.controller';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import * as dotenv from 'dotenv';
import configuration from './config/configuration';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ClothModule,
    CacheModule.register(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV == 'dev' ? '.env.dev' : '.env.prod',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      load: [configuration],
      validationSchema: Joi.object({
        DB_PASSWORD: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService], // nestjs Ioc container에 provider를 등록하는 과정
})
export class AppModule {
  // 미들웨어를 등록하려면 NestModule을 꼭 구현해야 한다.
}
