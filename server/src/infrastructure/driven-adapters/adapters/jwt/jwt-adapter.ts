import { IEncrypt } from "@/domain/models/gateways/encrypt-repository";
import jwt from "jsonwebtoken";

export class JwtAdapter implements IEncrypt {
  encrypt(text: string | number | Buffer): Promise<string> {
    // return jwt.sign({ account})
  }
}
