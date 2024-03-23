import { IsInt, IsString, MaxLength } from "class-validator";

export class CreateUserDto {

  @IsInt()
  // @MinLength(10)
  document_type: number;

  @IsInt()
  document:number;


  @IsString()
  full_name: string;

  @IsString()
  role: string;

  @IsString()
  password:string

  @IsString()
  status: string;
}
