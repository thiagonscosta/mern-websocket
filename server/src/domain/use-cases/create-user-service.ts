import { AddUserParams, UserModel } from "../models/user";

export interface ICreateUserService {
  createUserService: (data: AddUserParams) => Promise<UserModel>;
}
