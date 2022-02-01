import bcrypt from 'bcrypt';
import { IHashRepository } from "@/domain/models/gateways/hash-repository";

export class BcryptAdapter implements IHashRepository {
    async hash(text: string): Promise<string> {
        return await bcrypt.hash(text, 10);
    }
    
}