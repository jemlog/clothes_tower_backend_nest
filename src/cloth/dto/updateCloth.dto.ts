import { CreateClothDto } from './createCloth.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateClothDto extends PartialType(CreateClothDto) {}
