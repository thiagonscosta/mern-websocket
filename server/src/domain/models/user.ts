export type UserModel = {
  id?: string | number;
  name: string;
  email: string;
  password: string;
  // pic?: string;
};

export type AddUserParams = Omit<UserModel, "id">;
