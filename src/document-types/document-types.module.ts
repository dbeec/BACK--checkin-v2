import { Module } from '@nestjs/common';
import { DocumentTypesService } from './document-types.service';
import { DocumentTypesController } from './document-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentType } from './entities/document-type.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentType, User])],
  controllers: [DocumentTypesController],
  providers: [DocumentTypesService],
  exports: [TypeOrmModule]
})
export class DocumentTypesModule {}
