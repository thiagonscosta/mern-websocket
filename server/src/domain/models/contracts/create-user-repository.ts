import { AddUserParams, UserModel } from "../user";

export const CREATE_USER_REPOSITORY = "CREATE_USER_REPOSITORY";

export interface ICreateUserRepository {
  createUserRepository: (data: AddUserParams) => Promise<UserModel>;
}
