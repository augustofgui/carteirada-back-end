import { Request, Response } from 'express';

import CreateUserService from '@app/use-cases/CreateUserService';
import GetAllUsersService from '@app/use-cases/GetAllUsersService';
import GetUserService from '@app/use-cases/GetUserService';
import PrismaUsersRepository from '@http/repositories/PrismaUsersRepository';
import AuthenticateUserService from '@app/use-cases/AuthenticateUserService';
import JWTTokenProvider from '@infra/providers/TokenProvider/implementations/JWTTokenProvider';
import BCryptHashProvider from '@infra/providers/HashProvider/implementations/BCryptHashProvider';

interface UserDTO {
  id: string;
  login: string;
  email: string;
  password?: string;
}
export default class UserController {
  public async create(req: Request, res: Response) {
    const { login, email, password } = req.body;

    const usersRepository = new PrismaUsersRepository();
    const hashProvider = new BCryptHashProvider();
    const createUser = new CreateUserService(usersRepository, hashProvider);

    const user = await createUser.execute({
      login,
      email,
      password,
    });

    return res.json(user);
  }

  public async auth(req: Request, res: Response) {
    const { email, password } = req.body;

    const usersRepository = new PrismaUsersRepository();
    const tokenProvider = new JWTTokenProvider();
    const hashProvider = new BCryptHashProvider();
    const authenticateUserService = new AuthenticateUserService(
      usersRepository,
      tokenProvider,
      hashProvider
    );

    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    });

    const userResponse: UserDTO = user;
    delete userResponse.password;

    return res.json({ userResponse, token });
  }

  public async getUser(req: Request, res: Response) {
    const id = req.params.id;

    const usersRepository = new PrismaUsersRepository();
    const getUser = new GetUserService(usersRepository);

    const user = await getUser.execute({
      id,
    });

    return res.json(user);
  }

  public async getAllUsers(req: Request, res: Response) {
    const usersRepository = new PrismaUsersRepository();
    const getAllUsers = new GetAllUsersService(usersRepository);

    const users = await getAllUsers.execute();

    return res.json(users);
  }
}
