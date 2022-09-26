import { User, ICreateUserDTO, UserProps } from '@core/entities/User';

export default interface IUsersRepository {
  create({ login, email, password }: ICreateUserDTO): Promise<User>;

  getAllUsers(): Promise<User[]>;

  findUserById({ id }: Pick<UserProps, 'id'>): Promise<User | null>;

  findUserByEmail({ email }: Pick<UserProps, 'email'>): Promise<User | null>;

  findUserByLogin({ login }: Pick<UserProps, 'login'>): Promise<User | null>;
}
