import { ICreateUserDTO, User, UserProps } from '@core/entities/User';
import IUsersRepository from '@core/repositories/IUsersRepository';
import PrismaUsersRepository from '@http/repositories/PrismaUsersRepository';

export default class GetUserService {
  constructor(private readonly usersRepository: IUsersRepository) {
    this.usersRepository = new PrismaUsersRepository();
  }

  public async execute({ id }: Pick<UserProps, 'id'>): Promise<User | null> {
    const user = await this.usersRepository.findUserById({ id });

    return user;
  }
}
