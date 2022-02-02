import { Adapter, Service } from "@tsclean/core";
import { IAuthenticationService } from "@/domain/use-cases/authentication-service";
import {
  HASH_COMPARE_REPOSITORY,
  IHashCompare,
} from "@/domain/models/gateways/hash-compare-repository";
import {
  CHECK_EMAIL_REPOSITORY,
  ICheckEmailRepository,
} from "@/domain/models/gateways/check-email-repository";
import {
  ENCRYPT_REPOSITORY,
  IEncrypt,
} from "@/domain/models/gateways/encrypt-repository";

@Service()
export class AuthenticationServiceImpl implements IAuthenticationService {
  constructor(
    @Adapter(HASH_COMPARE_REPOSITORY)
    private readonly hashCompare: IHashCompare,
    @Adapter(CHECK_EMAIL_REPOSITORY)
    private readonly checkEmail: ICheckEmailRepository,
    @Adapter(ENCRYPT_REPOSITORY)
    private readonly encrypt: IEncrypt
  ) {}
  async auth(
    data: IAuthenticationService.Params
  ): Promise<IAuthenticationService.Result> {
    const hasAccount = await this.checkEmail.checkEmail(data.email);
    const isValid = await this.hashCompare.compare(
      data.password,
      hasAccount.password
    );
    if (isValid) {
      const accessToken = await this.encrypt.encrypt(hasAccount.id);
    }
  }
}
