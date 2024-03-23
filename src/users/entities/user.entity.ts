import { IsNotEmpty } from "class-validator";
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date;

  @Column()
  document_type: string;

  @Column()
  document: number;

  @Column()
  full_name: string;

  @Column()
  role: string;

  @Column()
  status: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @DeleteDateColumn()
  deleted_at: Date;
}