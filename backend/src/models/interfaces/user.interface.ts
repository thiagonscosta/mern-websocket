interface User {
  name: string;
  email: string;
  password: string;
  pic: string;
  isAdmin: boolean;
  matchPassword: (password: string) => Promise<boolean>;
}
