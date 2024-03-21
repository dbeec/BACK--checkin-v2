import { Injectable } from '@nestjs/common';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentTypesService {
  constructor(
    @InjectRepository(DocumentType)
    private documenttypesRepository: Repository<DocumentType>
  ){}

  async create(createDocumentTypeDto: CreateDocumentTypeDto) {
    return await this.documenttypesRepository.save(createDocumentTypeDto)
  }

  async findAll() {
    return `This action returns all documentTypes`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} documentType`;
  }

  async update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    return `This action updates a #${id} documentType`;
  }

  async remove(id: number) {
    return `This action removes a #${id} documentType`;
  }
}
