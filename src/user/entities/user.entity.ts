import { DocumentType } from "src/document-types/entities/document-type.entity";
import { Role } from "src/roles/entities/role.entity";
import { Status } from "src/status/entities/status.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  create_at: Date;

  @ManyToOne(() => DocumentType, (documentType) => documentType.id, {
    eager: true,
    nullable: false,
  })
  documentType: DocumentType;

  @Column()
  document: string;

  @Column()
  full_name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @ManyToOne(() => Role, (roles) => roles.id, {
    eager: true,
    nullable: false,
  })
  role: Role;

  @ManyToOne(() => Status, (status) => status.id, {
    eager: true,
    nullable: false
  })
  stateType: Status;
}