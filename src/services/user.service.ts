import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from '../dtos/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const { name, email, password } = createUserDto;

    if (!name || !email || !password)
      throw new BadRequestException('Nome, email e senha são obrigatórios!');
    const user = await this.findUserByUsername(email);
    if (user) throw new BadRequestException('Email cadastrado!');
    if (password.length < 6)
      throw new BadRequestException(
        'A senha deve ter pelo menos 6 caracteres.',
      );
    createUserDto.password = await this.encriptPassword(password);
    const createdUser = new this.userModel(createUserDto);
    createdUser.save();
    const payload = { email: createdUser.email, sub: String(createdUser._id) };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async findUserByUsername(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }
  async encriptPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }
}
