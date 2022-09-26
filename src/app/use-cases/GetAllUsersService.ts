import { ICreateUserDTO, User, UserProps } from '@core/entities/User';
import IUsersRepository from '@core/repositories/IUsersRepository';
import PrismaUsersRepository from '@http/repositories/PrismaUsersRepository';

export default class GetAllUsersService {
  constructor(private readonly usersRepository: IUsersRepository) {
    this.usersRepository = new PrismaUsersRepository();
  }

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.getAllUsers();

    return users;
  }
}
