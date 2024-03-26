import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  create_at: Date;

  @Column()
  document_type: string;

  @Column()
  full_name: string;

  @Column()
  rol: string;

  @Column({default: "active"})
  status: string;
}