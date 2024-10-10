import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { SignInDto } from '../dtos/signin.dto';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async signIn(@Body() signInDto: SignInDto): Promise<string> {
    return await this.authService.signIn(signInDto);
  }
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.userService.createUser(createUserDto);
  }
}
