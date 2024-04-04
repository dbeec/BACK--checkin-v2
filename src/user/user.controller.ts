import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.userService.findOne(id);
  // }

  @Get(':document')
  findOneByDocument(@Param('document') document: string) {
    return this.userService.findOneByDocument(document)
  }

  @Patch(':document')
  update(@Param('document') document: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(document, updateUserDto);
  }

  @Delete(':document')
  remove(@Param('document') document: string) {
    return this.userService.remove(document);
  }
}
