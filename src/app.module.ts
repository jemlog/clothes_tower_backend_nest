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
import { ThrottlerModule } from '@nestjs/throttler';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ClothModule,
    ThrottlerModule.forRoot({
      ttl: 30,
      limit: 20,
    }),
    CacheModule.register(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV == 'dev' ? '.env.dev' : '.env.prod',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',

      validationSchema: Joi.object({
        DB_PASSWORD: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
