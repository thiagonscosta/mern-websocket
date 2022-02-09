import { Document } from 'mongoose';

export interface IUserDocument extends Document {
  name: string;
  email: string;
  password: string;
  pic: string;
  isAdmin: boolean;
  // matchPassword: (password: string) => Promise<boolean>;
}