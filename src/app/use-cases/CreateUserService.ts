import { ICreateUserDTO, User } from '@core/entities/User';
import AppError from '@core/errors/AppError';
import IUsersRepository from '@core/repositories/IUsersRepository';
import PrismaUsersRepository from '@http/repositories/PrismaUsersRepository';

export default class CreateUserService {
  constructor(private readonly usersRepository: IUsersRepository) {
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

    //HASH PASSWORD

    const newUser = new User({
      login,
      email,
      password,
    });

    const user = await this.usersRepository.create(newUser);

    return user;
  }
}
