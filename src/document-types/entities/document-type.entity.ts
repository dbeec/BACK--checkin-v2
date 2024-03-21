import { Column, PrimaryGeneratedColumn } from "typeorm";

export class DocumentType {

  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
