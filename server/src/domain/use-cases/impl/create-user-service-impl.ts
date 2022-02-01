import { Adapter, Service } from "@tsclean/core";
import { ICreateUserService } from "@/domain/use-cases/create-user-service";
import { AddUserParams, UserModel } from "@/domain/models/user";
import {
  CREATE_USER_REPOSITORY,
  ICreateUserRepository,
} from "@/domain/models/contracts/create-user-repository";
import {
  CHECK_EMAIL_REPOSITORY,
  ICheckEmailRepository,
} from "@/domain/models/gateways/check-email-repository";
import {
  HASH_REPOSITORY,
  IHashRepository,
} from "@/domain/models/gateways/hash-repository";

@Service()
export class CreateUserServiceImpl implements ICreateUserService {
  constructor(
    @Adapter(CREATE_USER_REPOSITORY)
    private readonly createUserRepository: ICreateUserRepository,
    @Adapter(CHECK_EMAIL_REPOSITORY)
    private readonly checkEmailRepository: ICheckEmailRepository,
    @Adapter(HASH_REPOSITORY)
    private readonly hashRepository: IHashRepository
  ) {}
  async createUserService(
    data: AddUserParams
  ): Promise<ICreateUserService.Exist | ICreateUserService.Result> {
    const userExists = await this.checkEmailRepository.checkEmail(data.email);
    if (userExists) {
      return true;
    }

    const hash = await this.hashRepository.hash(data.password);
    const user = await this.createUserRepository.createUserRepository({
      ...data,
      password: hash,
    });
    if (user) {
      return user;
    }
  }
}
