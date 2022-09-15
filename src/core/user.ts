export interface UserProps {
  id: string;
  name: string;
  login: string;
  email: string;
  password: string;
  createdAt: Date;
  telephone: string;
}

export class User {
  private props: UserProps;

  get name() {
    return this.props.name;
  }

  constructor(props: UserProps) {
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

    if (!emailRegex.test(props.email)) {
      throw new Error('An user with a invalid email!');
    }

    this.props = props;
  }
}
