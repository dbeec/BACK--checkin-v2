import { User } from "src/user/entities/user.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  create_at: Date;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.role)
  roles: User[]

  @DeleteDateColumn()
  deleted_at: Date;
}