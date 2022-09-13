import { expect, test } from 'vitest';
import { User } from '../src/entities/user';

test('create an user', () => {
  const user = new User({
    id: '0',
    name: 'John Doe',
    login: 'johndoe123',
    email: 'john@doe.com',
    password: '12341234',
    telephone: '12341234',
    created_at: new Date(),
  });

  expect(user).toBeInstanceOf(User);
  expect(user.name).toEqual('John Doe');
});
