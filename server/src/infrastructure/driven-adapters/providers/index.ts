import { CREATE_USER_REPOSITORY } from "@/domain/models/contracts/create-user-repository";
import { CHECK_EMAIL_REPOSITORY } from "@/domain/models/gateways/check-email-repository";
import { ENCRYPT_REPOSITORY } from "@/domain/models/gateways/encrypt-repository";
import { HASH_COMPARE_REPOSITORY } from "@/domain/models/gateways/hash-compare-repository";
import { HASH_REPOSITORY } from "@/domain/models/gateways/hash-repository";
import { AUTHENTICATION_SERVICE } from "@/domain/use-cases/authentication-service";
import { CREATE_USER_SERVICE } from "@/domain/use-cases/create-user-service";
import { AuthenticationServiceImpl } from "@/domain/use-cases/impl/authentication-service-impl";
import { CreateUserServiceImpl } from "@/domain/use-cases/impl/create-user-service-impl";
import { BcryptAdapter } from "../adapters/bcrypt/bcrypt-adapter";
import { JwtAdapter } from "../adapters/jwt/jwt-adapter";
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
    provide: HASH_COMPARE_REPOSITORY,
    useClass: BcryptAdapter,
  },
  {
    provide: ENCRYPT_REPOSITORY,
    useClass: JwtAdapter,
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
  {
    provide: AUTHENTICATION_SERVICE,
    useClass: AuthenticationServiceImpl,
  },
];
