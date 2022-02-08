export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  pic: string;
  isAdmin: boolean;
  // matchPassword: (password: string) => Promise<boolean>;
}