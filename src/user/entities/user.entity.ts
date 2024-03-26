import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  create_at: Date;

  @Column()
  document_type: string;

  @Column()
  full_name: string;

  @ManyToOne(() => Role, (role) => role.id, {
    eager: true,
  })
  role: Role;

  @Column({ default: "active" })
  status: string;
}