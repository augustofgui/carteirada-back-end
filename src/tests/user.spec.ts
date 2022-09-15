import { expect, test } from 'vitest';
import { User } from '../core/entities/user';

test('create an user', () => {
  const user = new User({
    id: '0',
    name: 'John Doe',
    login: 'johndoe123',
    email: 'john@doe.com',
    password: '12341234',
    telephone: '12341234',
    createdAt: new Date(),
  });

  expect(user).toBeInstanceOf(User);
  expect(user.name).toEqual('John Doe');
});
