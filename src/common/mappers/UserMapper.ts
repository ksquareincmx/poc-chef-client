import { IUserDTO, IUser } from "../models/User";

export const toEntity = (dto: IUserDTO): IUser => {
  return {
    id: dto.id,
    name: dto.name
  };
};
