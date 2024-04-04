import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './entities/status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private readonly stateRepository: Repository<Status>
  ){}
  async create(createStatusDto: CreateStatusDto) {
    return await this.stateRepository.save(createStatusDto)
  }

  async findAll() {
    return await this.stateRepository.find()
  }

  async findOne(id: number) {
    return `This action returns a #${id} status`;
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  async remove(id: number) {
    return `This action removes a #${id} status`;
  }
}
