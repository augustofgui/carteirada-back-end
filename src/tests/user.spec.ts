import { expect, test } from 'vitest';
import { User } from '@core/entities/User';

test('creates an user', () => {
  const user = new User({
    login: 'johndoe123',
    email: 'john@doe.com',
    password: '12341234',
  });

  expect(user).toBeInstanceOf(User);
});
