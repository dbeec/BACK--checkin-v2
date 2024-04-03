import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { DocumentType } from 'src/document-types/entities/document-type.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    @InjectRepository(DocumentType)
    private readonly docTypesRepository: Repository<DocumentType>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const role = await this.roleRepository.findOneBy({ name: createUserDto.role })
    const documentType = await this.docTypesRepository.findOneBy({ type: createUserDto.type })

    if (!role) {
      throw new BadRequestException('Role not found')
    }
    if (!documentType) {
      throw new BadRequestException('Document type not found');
    }
    return await this.userRepository.save({
      ...createUserDto,
      role,
      documentType
    })
  }

  async findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email })
  }

  async findAll() {
    return await this.userRepository.find()
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id: id.toString() })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id: id.toString() });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Actualizamos las propiedades del usuario con los valores del DTO
    Object.assign(user, updateUserDto);

    // Guardamos los cambios en la base de datos
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    return await this.userRepository.softDelete({ id: id.toString() })
  }
}