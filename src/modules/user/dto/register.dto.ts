import { IsNumber } from 'class-validator';

export class RegisterDto {
  @IsNumber()
  code: number;
}
