import { ICreateUserDTO, User, UserProps } from '@core/entities/User';
import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@core/repositories/IUsersRepository';
import PrismaUsersRepository from '@http/repositories/PrismaUsersRepository';

@injectable()
export default class GetUserService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository
  ) {}

  public async execute({ id }: Pick<UserProps, 'id'>): Promise<User | null> {
    const user = await this.usersRepository.findUserById({ id });

    return user;
  }
}
