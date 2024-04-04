import { User } from 'src/user/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  create_at: Date;

  @Column({ unique: true, nullable: false})
  state: string;

  @OneToMany(() => User, (user) =>user.stateType)
  users: User[]

  @DeleteDateColumn()
  delete_at: Date;
}

