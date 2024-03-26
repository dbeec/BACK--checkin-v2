import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RolesModule } from 'src/roles/roles.module';
import { RolesService } from 'src/roles/roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), RolesModule],
  controllers: [UserController],
  providers: [UserService, RolesService],
  exports: []
})
export class UserModule {}