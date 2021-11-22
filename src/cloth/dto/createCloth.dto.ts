import { IsNotEmpty } from 'class-validator';
export class CreateClothDto {
  top_bottom: string;

  short_long: string;

  color: string;

  material: string;
}
