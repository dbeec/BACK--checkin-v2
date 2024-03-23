import { IsString } from 'class-validator';

export class CreateDocumentTypeDto {
  @IsString()
  type: string;
}
