export interface UserProps {
  id: string;
  name: string;
  login: string;
  email: string;
  password: string;
  created_at: Date;
  telephone: string;
}

export class User {
  private props: UserProps;
}
