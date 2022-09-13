import { Request, Response } from 'express';
import prismaClient from '../database/PrismaClient';

export default class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, login, email, password, telephone } = req.body;

    const user = await prismaClient.user.create({
      data: {
        name,
        login,
        email,
        password,
        telephone,
      },
    });

    return res.json(user);
  }
}
