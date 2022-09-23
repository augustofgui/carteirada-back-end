import { ICreateUserDTO, User, UserProps } from '../entities/user';

export default interface IUsersRepository {
  create({ login, email, password }: ICreateUserDTO): Promise<User>;

  findUserByEmail({ email }: Pick<UserProps, 'email'>): Promise<User | null>;

  findUserByLogin({ login }: Pick<UserProps, 'login'>): Promise<User | null>;
}
