import { IsInt, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  @MaxLength(4)
  document_type: string

  @IsInt()
  // @MinLength(10)
  document: number;

  @IsString()
  role: string;

  @IsString()
  status: string;
}
