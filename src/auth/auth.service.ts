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
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('email y/o contraseña no son validos');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('email y/o contraseña no son validos');
    }

    const payload = {  user: user };
    const access_token = await this.jwtService.signAsync(payload);

    return {
      __docType: user.documentType.type,
      __doc: user.document,
      __name: user.full_name,
      __email: user.email,
      __rol: user.role.name,
      access_token,
    };
  }
}
