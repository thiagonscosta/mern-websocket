import { CREATE_USER_REPOSITORY } from "@/domain/models/contracts/create-user-repository";
import { CHECK_EMAIL_REPOSITORY } from "@/domain/models/gateways/check-email-repository";
import { HASH_REPOSITORY } from "@/domain/models/gateways/hash-repository";
import { CREATE_USER_SERVICE } from "@/domain/use-cases/create-user-service";
import { CreateUserServiceImpl } from "@/domain/use-cases/impl/create-user-service-impl";
import { BcryptAdapter } from "../adapters/bcrypt/bcrypt-adapter";
import { UserMongooseRepositoryAdapter } from "../adapters/orm/mongoose/user-mongoose-repository-adapter";

export const adapters = [
  {
    provide: CREATE_USER_REPOSITORY,
    useClass: UserMongooseRepositoryAdapter,
  },
  {
    provide: HASH_REPOSITORY,
    useClass: BcryptAdapter,
  },
  {
    provide: CHECK_EMAIL_REPOSITORY,
    useClass: UserMongooseRepositoryAdapter,
  },
];

export const services = [
  {
    provide: CREATE_USER_SERVICE,
    useClass: CreateUserServiceImpl,
  },
];
