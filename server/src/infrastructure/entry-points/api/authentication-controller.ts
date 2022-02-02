import {
  AUTHENTICATION_SERVICE,
  IAuthenticationService,
} from "@/domain/use-cases/authentication-service";
import { Mapping, Get, Adapter, Post, Body } from "@tsclean/core";
import { ValidateFields } from "../helpers/validate-fields";

@Mapping("api/v1/authentication")
export class AuthenticationController {
  constructor(
    @Adapter(AUTHENTICATION_SERVICE)
    private readonly authenticationService: IAuthenticationService
  ) {}

  @Post()
  async authController(
    @Body() data: IAuthenticationService.Params
  ): Promise<any> {
    const { errors, isValid } = ValidateFields.fieldsValidation(data);
    if (!isValid) return { statusCode: 422, body: { message: errors } };
    const result = await this.authenticationService.auth(data);
    return {
      accessToken: result.accessToken,
      user: {
        id: result.id,
        name: result.name,
      },
    };
  }
}
