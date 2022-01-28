export type UserModel = {
  id?: string | number;
  name: string;
  email: string;
  password: string;
  roles: UserRoleModel[];
  pic: string;
};

export type UserRoleModel = [
  {
    role: string;
  }
];

export type AddUserParams = Omit<UserModel, "id">;
