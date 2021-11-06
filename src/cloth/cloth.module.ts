import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClothController } from './cloth.controller';
import { ClothService } from './cloth.service';
import { Cloth } from 'src/cloth/domain/cloth.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Cloth]), ConfigModule],
  exports: [TypeOrmModule],
  controllers: [ClothController],
  providers: [ClothService],
})
export class ClothModule {}
