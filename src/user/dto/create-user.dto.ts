import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  document_type: string;

  @IsString()
  @IsNotEmpty()
  full_name: string;
  
  @IsString()
  @IsNotEmpty()
  email?: string;

  @IsString()
  @IsNotEmpty()
  password?: string;
  
  @IsString()
  @IsNotEmpty()
  role?: string;
}