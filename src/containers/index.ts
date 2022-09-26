import { container } from 'tsyringe';
import IUsersRepository from '@core/repositories/IUsersRepository';
import PrismaUsersRepository from '@http/repositories/PrismaUsersRepository';
import BCryptHashProvider from '@infra/providers/HashProvider/implementations/BCryptHashProvider';
import IHashProvider from '@infra/providers/HashProvider/models/IHashProvider';
import ITokenProvider from '@infra/providers/TokenProvider/models/ITokenProvider';
import JWTTokenProvider from '@infra/providers/TokenProvider/implementations/JWTTokenProvider';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  PrismaUsersRepository
);
container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
container.registerSingleton<ITokenProvider>('TokenProvider', JWTTokenProvider);
