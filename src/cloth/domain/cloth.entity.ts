import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Cloth {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  top_bottom: string;

  @ApiProperty()
  @Column()
  short_long: string;

  @ApiProperty()
  @Column()
  color: string;

  @ApiProperty()
  @Column()
  material: string;
}
