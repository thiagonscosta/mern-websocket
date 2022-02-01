import { ICreateUserRepository } from "@/domain/models/contracts/create-user-repository";
import { ICheckEmailRepository } from "@/domain/models/gateways/check-email-repository";
import { AddUserParams, UserModel } from "@/domain/models/user";
import { UserModelSchema } from "./models/user";

export class UserMongooseRepositoryAdapter
  implements ICreateUserRepository, ICheckEmailRepository
{
  map(data: any): any {
    const { _id, name, email } = data;
    return Object.assign({}, { id: _id.toString(), name, email });
  }

  async checkEmail(email: string): Promise<ICheckEmailRepository.Result> {
    const user = await UserModelSchema.findOne({ email }).exec();
    return this.map(user);
  }

  async createUserRepository(data: AddUserParams): Promise<UserModel> {
    return await UserModelSchema.create(data);
  }
}
