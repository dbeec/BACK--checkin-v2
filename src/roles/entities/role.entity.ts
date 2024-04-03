import { User } from "src/user/entities/user.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @Column({ unique: true, nullable: false })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[]

  @DeleteDateColumn()
  deleted_at: Date;
}