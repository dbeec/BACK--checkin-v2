import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authSerive: AuthService) { }

  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authSerive.login(loginDto);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  profile(@Request() req: any) {
    return req.user;
  }

}
