import { ICreateUserDTO, User } from '../../core/entities/user';
import IUsersRepository from '../../core/repositories/IUsersRepository';
import PrismaUsersRepository from '../../http/repositories/PrismaUsersRepository';

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
      throw new Error('Email address already in use.');
    }

    const checkUniqueUserLogin = await this.usersRepository.findUserByLogin({
      login,
    });

    if (checkUniqueUserLogin) {
      throw new Error('Login address already in use.');
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
