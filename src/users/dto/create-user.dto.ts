import { IsInt, IsString, MaxLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  @MaxLength(4)
  document_type: string

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
