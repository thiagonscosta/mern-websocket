import { CREATE_USER_REPOSITORY } from "@/domain/models/contracts/create-user-repository";
import { AddUserParams } from "@/domain/models/user";
import {
  CREATE_USER_SERVICE,
  ICreateUserService,
} from "@/domain/use-cases/create-user-service";
import { CreateUserServiceImpl } from "@/domain/use-cases/impl/create-user-service-impl";
import { Mapping, Get, Adapter, Post, Body } from "@tsclean/core";

@Mapping("api/v1/create-user")
export class CreateUserController {
  constructor(
    @Adapter(CREATE_USER_SERVICE)
    private readonly createUserService: ICreateUserService
  ) {}

  // Example function
  @Post()
  async createUser(@Body() data: AddUserParams): Promise<any> {
    return await this.createUserService.createUserService(data);
  }
}
