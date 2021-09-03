import { IsEmail, IsString, Max, Min } from 'class-validator';

export class ConfirmEmailDto {
  @IsString()
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @Min(6)
  @Max(16)
  password: string;
}
