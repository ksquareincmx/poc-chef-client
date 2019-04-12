export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  authProviderId: string;
  createdAt: number;
  updatedAt: number;
}

export interface IUserDTO {
  id: string;
  name: string;
  email: string;
  role: string;
  auth_provider_id: string;
  created_at: number;
  updated_at: number;
}

export const user = (): IUser => {
  return {
    id: "",
    name: "",
    email: "",
    role: "",
    authProviderId: "",
    createdAt: 1555099890,
    updatedAt: 1555099890,
  };
};
