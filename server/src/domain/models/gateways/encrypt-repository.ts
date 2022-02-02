export const ENCRYPT_REPOSITORY = "ENCRYPT_REPOSITORY";

export interface IEncrypt {
  encrypt: (text: string | number | Buffer) => Promise<IEncrypt.Result>;
}

export namespace IEncrypt {
  export type Result = string;
}
