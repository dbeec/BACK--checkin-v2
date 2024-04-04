import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcryptjs from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) { }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.findOneByEmail(email)
    console.log(user)

    if (!user) {
      throw new UnauthorizedException('email y/o contraseña no son validosSSS');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('email y/o contraseña no son validos')
    }
    return user;
  }
}
