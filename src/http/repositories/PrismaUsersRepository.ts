import { User, UserProps } from '../../core/entities/user';
import IUsersRepository from '../../core/repositories/IUsersRepository';
import prismaClient from '../../infra/database/prisma/PrismaClient';

export default class PrismaUsersRepository implements IUsersRepository {
  public async create({
    name,
    login,
    email,
    password,
    telephone,
  }: UserProps): Promise<User> {
    const createdUser = await prismaClient.user.create({
      data: {
        name,
        login,
        email,
        password,
        telephone,
      },
    });

    return createdUser;
  }

  public async findUserByEmail({
    email,
  }: Pick<UserProps, 'email'>): Promise<User | null> {
    const foundUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!foundUser) return null;

    return foundUser;
  }

  public async findUserByLogin({
    login,
  }: Pick<UserProps, 'login'>): Promise<User | null> {
    const foundUser = await prismaClient.user.findFirst({
      where: { login },
    });

    if (!foundUser) return null;

    return foundUser;
  }
}
