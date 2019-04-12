import { IUserDTO, IUser } from "../models/User";

export const toEntity = (dto: IUserDTO): IUser => {
  const { id, name, email, role, auth_provider_id, created_at, updated_at } = dto;
  return {
    id,
    name,
    email,
    role,
    authProviderId: auth_provider_id,
    createdAt: created_at,
    updatedAt: updated_at,
  };
};
