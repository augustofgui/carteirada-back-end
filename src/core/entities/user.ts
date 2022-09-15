export interface UserProps {
  id: string;
  name: string;
  login: string;
  email: string;
  password: string;
  createdAt: Date;
  telephone: string;
}

export interface ICreateUserDTO {
  name: string;
  login: string;
  email: string;
  password: string;
  telephone: string;
}

export class User {
  id: string;
  name: string;
  login: string;
  email: string;
  password: string;
  createdAt: Date;
  telephone: string;

  constructor({ name, login, email, password, telephone }: ICreateUserDTO) {
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

    if (!emailRegex.test(email)) {
      throw new Error('An user with a invalid email!');
    }

    this.id = '1';
    this.name = name;
    this.login = login;
    this.email = email;
    this.password = password;
    this.telephone = telephone;
    this.createdAt = new Date();
  }
}
