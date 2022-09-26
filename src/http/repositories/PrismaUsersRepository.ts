import { User, UserProps } from '@core/entities/User';
import IUsersRepository from '@core/repositories/IUsersRepository';
import prismaClient from '@infra/database/prisma/PrismaClient';

export default class PrismaUsersRepository implements IUsersRepository {
  public async create({ login, email, password }: UserProps): Promise<User> {
    const createdUser = await prismaClient.user.create({
      data: {
        login,
        email,
        password,
      },
    });

    return createdUser;
  }

  public async getAllUsers(): Promise<User[]> {
    const users = (await prismaClient.user.findMany({
      select: {
        id: true,
        login: true,
        email: true,
        password: false,
        createdAt: true,
      },
    })) as User[];
    return users;
  }

  public async findUserById({
    id,
  }: Pick<UserProps, 'id'>): Promise<User | null> {
    const foundUser = (await prismaClient.user.findUnique({
      where: { id },
      select: {
        id: true,
        login: true,
        email: true,
        password: false,
        createdAt: true,
      },
    })) as User;

    if (!foundUser) return null;

    return foundUser;
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
