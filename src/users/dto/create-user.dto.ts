import { IsInt, IsString, MaxLength } from "class-validator";

export class CreateUserDto {

  @IsInt()
  // @MinLength(10)
  document: number;

  @IsString()
  full_name: string;

  @IsString()
  role: string;

  @IsString()
  status: string;
}
