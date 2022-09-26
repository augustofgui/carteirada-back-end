import { container } from 'tsyringe';
import IUsersRepository from '@core/repositories/IUsersRepository';
import PrismaUsersRepository from '@http/repositories/PrismaUsersRepository';
import BCryptHashProvider from '@infra/providers/HashProvider/implementations/BCryptHashProvider';
import IHashProvider from '@infra/providers/HashProvider/models/IHashProvider';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  PrismaUsersRepository
);
container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
