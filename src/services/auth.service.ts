import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from '../dtos/signin.dto';
import { UserService } from '../services/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<any> {
    const { email, password } = signInDto;
    const user = await this.userService.findUserByUsername(email);
    const passwordHash = await this.comparePassword(password, user?.password);
    if (!passwordHash) return new ForbiddenException('Credenciais inválidas');

    const payload = { email: user.email, sub: String(user._id) };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async comparePassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
