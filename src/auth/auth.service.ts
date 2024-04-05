import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('email y/o contraseña no son validos');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('email y/o contraseña no son validos');
    }

    const payload = { u__id: user.id, u__name: user.full_name, u__mail: user.email };
    const access_token = await this.jwtService.signAsync(payload);

    return {
      __uId: user.id,
      __name: user.full_name,
      __email: user.email,
      access_token,
    };
  }
}
