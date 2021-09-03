import { IsString, Min } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Min(1)
  name: string;
}
