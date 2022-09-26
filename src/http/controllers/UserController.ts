import { Request, Response } from 'express';
import { container } from 'tsyringe';

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
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      login,
      email,
      password,
    });

    const userResponse: UserDTO = user;
    delete userResponse.password;

    return res.json(userResponse);
  }

  public async auth(req: Request, res: Response) {
    const { email, password } = req.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);

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

    const getUser = container.resolve(GetUserService);

    const user = await getUser.execute({
      id,
    });

    return res.json(user);
  }

  public async getAllUsers(req: Request, res: Response) {
    const getAllUsers = container.resolve(GetAllUsersService);

    const users = await getAllUsers.execute();

    return res.json(users);
  }
}
