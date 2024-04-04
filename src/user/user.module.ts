import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RolesModule } from 'src/roles/roles.module';
import { RolesService } from 'src/roles/roles.service';
import { DocumentTypesService } from 'src/document-types/document-types.service';
import { DocumentTypesModule } from 'src/document-types/document-types.module';
import { StatusModule } from 'src/status/status.module';
import { StatusService } from 'src/status/status.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), RolesModule, DocumentTypesModule, StatusModule],
  controllers: [UserController],
  providers: [UserService, RolesService, DocumentTypesService, StatusService],
  exports: []
})
export class UserModule {}