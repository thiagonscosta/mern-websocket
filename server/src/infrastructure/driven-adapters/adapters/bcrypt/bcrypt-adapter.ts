import bcrypt from "bcrypt";
import { IHashRepository } from "@/domain/models/gateways/hash-repository";
import { IHashCompare } from "@/domain/models/gateways/hash-compare-repository";

export class BcryptAdapter implements IHashRepository, IHashCompare {
  private readonly salt: number = 12;

  constructor() {}

  async hash(text: string): Promise<string> {
    return await bcrypt.hash(text, this.salt);
  }
  async compare(text: string, verify: string): Promise<boolean> {
    return await bcrypt.compare(text, verify);
  }
}
