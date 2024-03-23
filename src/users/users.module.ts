import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DocumentType } from 'src/document-types/entities/document-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, DocumentType])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
