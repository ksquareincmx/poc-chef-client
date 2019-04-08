import { IUserDTO, IUser } from "../models/User";

export const toEntity = (dto: IUserDTO): IUser => {
  const { id, name } = dto;
  return { id, name };
};
