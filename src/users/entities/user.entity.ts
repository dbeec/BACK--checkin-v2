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
  role: string;

  @Column()
  status: string;

  @Column()
  password: string;

  @DeleteDateColumn()
  deleted_at: Date;
}
