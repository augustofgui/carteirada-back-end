import { User } from '@core/entities/User';
import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@core/repositories/IUsersRepository';
import ITokenProvider from '@infra/providers/TokenProvider/models/ITokenProvider';
import AppError from '@core/errors/AppError';
import IHashProvider from '@infra/providers/HashProvider/models/IHashProvider';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
    @inject('TokenProvider')
    private readonly tokenProvider: ITokenProvider,
    @inject('HashProvider')
    private readonly hashProvider: IHashProvider
  ) {}

  public async execute({
    email,
    password,
  }: Pick<User, 'email' | 'password'>): Promise<IResponse> {
    const user = await this.usersRepository.findUserByEmail({ email });

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const token = await this.tokenProvider.generateToken(user.id);

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
