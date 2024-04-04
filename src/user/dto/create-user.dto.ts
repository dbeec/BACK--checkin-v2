import { Transform } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  document: string;

  @IsString()
  @IsNotEmpty()
  full_name: string;
  
  @IsString()
  @IsNotEmpty()
  email: string;

  @Transform(({value}) => value.trim())
  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;
  
  @IsString()
  @IsNotEmpty()
  role: string;

  states?: any;
}