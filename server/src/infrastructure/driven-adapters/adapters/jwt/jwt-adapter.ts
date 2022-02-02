import { IEncrypt } from "@/domain/models/gateways/encrypt-repository";
import { SESSION_SECRET } from "@/application/config/environment";
import jwt from "jsonwebtoken";

const secret = SESSION_SECRET;
export class JwtAdapter implements IEncrypt {
  async encrypt(text: string | number | Buffer): Promise<IEncrypt.Result> {
    return jwt.sign({ account: text }, secret, { expiresIn: "1d" });
  }
}
