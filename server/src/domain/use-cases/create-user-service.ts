import { AddUserParams, UserModel } from "../models/user";

export const CREATE_USER_SERVICE = "CREATE_USER_SERVICE";

export interface ICreateUserService {
  createUserService: (data: AddUserParams) => Promise<ICreateUserService.Result> | Promise<ICreateUserService.Exist>;
}

export namespace ICreateUserService {
  export type Exist = boolean;
  export type Result = {
    id?: string | number;
  };
}
