import { ICreateUserRepository } from "@/domain/models/contracts/create-user-repository";
import { AddUserParams, UserModel } from "@/domain/models/user";
import { UserModelSchema } from "./models/user";

export class UserMongooseRepositoryAdapter implements ICreateUserRepository {
  async createUserRepository(data: AddUserParams): Promise<UserModel> {
    return await UserModelSchema.create(data);
  }
}
