import { Request, Response } from 'express';
import CreateUserService from '../../app/use-cases/CreateUserService';
import prismaClient from '../../infra/database/prisma/PrismaClient';
import PrismaUsersRepository from '../repositories/PrismaUsersRepository';

export default class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, login, email, password, telephone } = req.body;

    const usersRepository = new PrismaUsersRepository();
    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({
      name,
      login,
      email,
      password,
      telephone,
    });

    return res.json(user);
  }
}
