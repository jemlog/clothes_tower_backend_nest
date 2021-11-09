import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClothController } from './cloth.controller';
import { ClothService } from './cloth.service';
import { Cloth } from 'src/cloth/domain/cloth.entity';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [TypeOrmModule.forFeature([Cloth]), ConfigModule],
  exports: [TypeOrmModule],
  controllers: [ClothController],
  providers: [
    ClothService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class ClothModule {}
