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

  @IsString()
  @IsNotEmpty()
  password: string;
  
  @IsString()
  @IsNotEmpty()
  role: string;

  states?: any;
}