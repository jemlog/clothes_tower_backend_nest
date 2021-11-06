import { IsNotEmpty } from 'class-validator';
export class CreateClothDto {
  @IsNotEmpty()
  top_bottom: string;

  @IsNotEmpty()
  short_long: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  material: string;
}
