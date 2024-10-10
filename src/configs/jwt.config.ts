import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { JWT_SECRET } from '../constants';

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  createJwtOptions(): JwtModuleOptions {
    return {
      secret: JWT_SECRET,
      global: true,
      signOptions: { expiresIn: '12h' },
    };
  }
}
