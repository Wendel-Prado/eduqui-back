import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { SignInDto } from 'src/dtos/signin.dto';
import { ForbiddenException } from '@nestjs/common';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            signIn: jest.fn(),
          },
        },
        {
          provide: UserService,
          useValue: {
            createUser: jest.fn(),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  describe('signIn', () => {
    it('should return an access token when login is successful', async () => {
      const signInDto: SignInDto = {
        email: 'test@test.com',
        password: 'password123',
      };
      const result = { access_token: 'mockToken' };

      jest.spyOn(authService, 'signIn').mockResolvedValue(result);

      expect(await authController.signIn(signInDto)).toBe(result);
    });

    it('should throw a ForbiddenException when login fails', async () => {
      const signInDto: SignInDto = {
        email: 'test@test.com',
        password: 'wrongpassword',
      };

      jest.spyOn(authService, 'signIn').mockImplementation(() => {
        throw new ForbiddenException('Credenciais inválidas');
      });

      await expect(authController.signIn(signInDto)).rejects.toThrow(
        ForbiddenException,
      );
    });
  });

  describe('signup', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        name: 'Test User',
        email: 'test@test.com',
        password: 'password123',
      };
      const result: any = {
        name: 'Test User',
        email: 'test@test.com',
      };

      jest.spyOn(userService, 'createUser').mockResolvedValue(result);

      expect(await authController.signup(createUserDto)).toBe(result);
    });
  });
});
