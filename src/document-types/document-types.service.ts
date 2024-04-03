import { Injectable } from '@nestjs/common';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentType } from './entities/document-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentTypesService {
  constructor(
    @InjectRepository(DocumentType)
    private readonly docTypesRepository: Repository<DocumentType>
  ) { }

  async create(createDocumentTypeDto: CreateDocumentTypeDto) {
    return await this.docTypesRepository.save(createDocumentTypeDto)
  }

  async findAll() {
    return await this.docTypesRepository.find()
  }

  async findOne(id: number) {
    return await this.docTypesRepository.findOneBy({ id: id.toString() })
  }

  async update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    return await this.docTypesRepository.update(id, updateDocumentTypeDto)
  }

  async remove(id: number) {
    return await this.docTypesRepository.softDelete({ id: id.toString() })
  }
}
