import { Request, Response } from 'express';
import CreateUserService from '../../app/use-cases/CreateUserService';
import GetAllUsersService from '../../app/use-cases/GetAllUsersService';
import GetUserService from '../../app/use-cases/GetUserService';
import PrismaUsersRepository from '../repositories/PrismaUsersRepository';

export default class UserController {
  async create(req: Request, res: Response) {
    const { login, email, password } = req.body;

    const usersRepository = new PrismaUsersRepository();
    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({
      login,
      email,
      password,
    });

    return res.json(user);
  }

  async getUser(req: Request, res: Response) {
    const id = req.params.id;

    const usersRepository = new PrismaUsersRepository();
    const getUser = new GetUserService(usersRepository);

    const user = await getUser.execute({
      id,
    });

    return res.json(user);
  }

  async getAllUsers(req: Request, res: Response) {
    const usersRepository = new PrismaUsersRepository();
    const getAllUsers = new GetAllUsersService(usersRepository);

    const users = await getAllUsers.execute();

    return res.json(users);
  }
}
