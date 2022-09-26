import AppError from '@core/errors/AppError';
import { randomUUID } from 'crypto';

export interface UserProps {
  id: string;
  login: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface ICreateUserDTO {
  login: string;
  email: string;
  password: string;
}

export class User {
  id: string;
  login: string;
  email: string;
  password: string;
  createdAt: Date;

  constructor({ login, email, password }: ICreateUserDTO) {
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

    if (!emailRegex.test(email)) {
      throw new AppError('An user with a invalid email!');
    }

    this.id = randomUUID();
    this.login = login;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
  }
}
