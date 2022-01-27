import {Adapter, Service} from "@tsclean/core";
import {ICreateUserService} from "@/domain/use-cases/create-user-service";
import { AddUserParams, UserModel } from "@/domain/models/user";
import { CREATE_USER_REPOSITORY } from "@/domain/models/contracts/create-user-repository";

@Service()
export class CreateUserServiceImpl implements ICreateUserService {
    constructor(
        @Adapter(CREATE_USER_REPOSITORY) private readonly createUserRepository;
    ) {
    }
    async createUserService(data: AddUserParams): Promise<UserModel> {
        return await this.createUserRepository(data);
    }
}