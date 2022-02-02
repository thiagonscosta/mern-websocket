import { CREATE_USER_REPOSITORY } from "@/domain/models/contracts/create-user-repository";
import { AddUserParams } from "@/domain/models/user";
import {
  CREATE_USER_SERVICE,
  ICreateUserService,
} from "@/domain/use-cases/create-user-service";
import { CreateUserServiceImpl } from "@/domain/use-cases/impl/create-user-service-impl";
import { Mapping, Get, Adapter, Post, Body } from "@tsclean/core";
import { ValidateFields } from "../helpers/validate-fields";

@Mapping("api/v1/create-user")
export class CreateUserController {
  constructor(
    @Adapter(CREATE_USER_SERVICE)
    private readonly createUserService: ICreateUserService
  ) {}

  @Post()
  async createUser(
    @Body() data: AddUserParams
  ): Promise<ICreateUserService.Result | any> {
    const { errors, isValid } = ValidateFields.fieldsValidation(data);
    if (!isValid) return { statusCode: 422, body: { message: errors } };
    const hasAccount = await this.createUserService.createUserService(data);
    console.log(hasAccount);
    if (hasAccount === true) {
      return {
        statusCode: 400,
        body: {
          message: "E-mail already in use",
        },
      };
    }
    return hasAccount;
  }
}
