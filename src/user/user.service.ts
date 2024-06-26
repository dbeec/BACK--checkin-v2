import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { DocumentType } from 'src/document-types/entities/document-type.entity';
import { Status } from 'src/status/entities/status.entity';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    @InjectRepository(DocumentType)
    private readonly docTypesRepository: Repository<DocumentType>,

    @InjectRepository(Status)
    private readonly stateRepository: Repository<Status>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const role = await this.roleRepository.findOneBy({
      name: createUserDto.role,
    });
    const documentType = await this.docTypesRepository.findOneBy({
      type: createUserDto.type,
    });
    const stateType = await this.stateRepository.findOneBy({
      state: createUserDto.states,
    });

    if (!role) {
      throw new BadRequestException('Role not found');
    }
    if (!documentType) {
      throw new BadRequestException('Document type not found');
    }

    const hashedPassword = await bcryptjs.hash(createUserDto.password, 10);

    return await this.userRepository.save({
      ...createUserDto,
      password: hashedPassword,
      role,
      documentType,
      stateType,
    });
  }

  async findByEmailWithPassword(email: string) {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password'],
    });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOneByDocument(document: string) {
    return await this.userRepository.findOneBy({ document });
  }

  async update(document: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ document: document });
    if (!user) {
      throw new NotFoundException(`User with ID ${document} not found`);
    }
    Object.assign(user, updateUserDto);

    return await this.userRepository.save(user);
  }

  async remove(document: string) {
    return await this.userRepository.softDelete({ document: document });
  }
}
