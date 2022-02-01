import { Adapter, Service } from "@tsclean/core";
import { ICreateUserService } from "@/domain/use-cases/create-user-service";
import { AddUserParams, UserModel } from "@/domain/models/user";
import { CREATE_USER_REPOSITORY } from "@/domain/models/contracts/create-user-repository";
import { CHECK_EMAIL_REPOSITORY } from "@/domain/models/gateways/check-email-repository";
import { HASH_REPOSITORY } from "@/domain/models/gateways/hash-repository";

@Service()
export class CreateUserServiceImpl implements ICreateUserService {
  constructor(
    @Adapter(CREATE_USER_REPOSITORY) private readonly createUserRepository,
    @Adapter(CHECK_EMAIL_REPOSITORY) private readonly checkEmailRepository,
    @Adapter(HASH_REPOSITORY) private readonly hashRepository 
  ) {}
  async createUserService(data: AddUserParams): Promise<UserModel> {
    const userExists = await this.checkEmailRepository.checkEmail(data.email);
    if (userExists) {
      return userExists;
    }
    const hash = await this.hashRepository.hash(data.password);
    const user = await this.createUserRepository.createUserRepository({ ...data, password: hash });
    if (user) { 
      return user;
    }
  }
}
