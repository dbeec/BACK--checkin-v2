import { IsNotEmpty } from 'class-validator';
import { DocumentType } from 'src/document-types/entities/document-type.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date;

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

  @ManyToOne(() => DocumentType, (documentType) => documentType.id, {
    eager: true,
  })
  document_type: DocumentType;
}
