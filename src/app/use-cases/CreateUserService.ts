import { injectable, inject } from 'tsyringe';
import { ICreateUserDTO, User } from '@core/entities/User';
import AppError from '@core/errors/AppError';
import IUsersRepository from '@core/repositories/IUsersRepository';
import PrismaUsersRepository from '@http/repositories/PrismaUsersRepository';
import IHashProvider from '@infra/providers/HashProvider/models/IHashProvider';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
    @inject('HashProvider')
    private readonly hashProvider: IHashProvider
  ) {
    this.usersRepository = new PrismaUsersRepository();
  }

  public async execute({
    login,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const checkUniqueUserEmail = await this.usersRepository.findUserByEmail({
      email,
    });

    if (checkUniqueUserEmail) {
      throw new AppError('Email address already in use.');
    }

    const checkUniqueUserLogin = await this.usersRepository.findUserByLogin({
      login,
    });

    if (checkUniqueUserLogin) {
      throw new AppError('Login address already in use.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const newUser = new User({
      login,
      email,
      password: hashedPassword,
    });

    const user = await this.usersRepository.create(newUser);

    return user;
  }
}
