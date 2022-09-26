import { User } from '@core/entities/User';
import IUsersRepository from '@core/repositories/IUsersRepository';
import ITokenProvider from '@infra/providers/TokenProvider/models/ITokenProvider';
import AppError from '@core/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly tokenProvider: ITokenProvider
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findUserByEmail({ email });

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    // const passwordMatched = await this.hashProvider.compareHash(
    //   password,
    //   user.password
    // );

    // if (!passwordMatched) {
    //   throw new AppError('Incorrect email/password combination.', 401);
    // }

    const token = await this.tokenProvider.generateToken(user.id);

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
