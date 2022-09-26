import { ICreateUserDTO, User, UserProps } from '@core/entities/User';
import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@core/repositories/IUsersRepository';
import PrismaUsersRepository from '@http/repositories/PrismaUsersRepository';

@injectable()
export default class GetAllUsersService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository
  ) {}

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.getAllUsers();

    return users;
  }
}
