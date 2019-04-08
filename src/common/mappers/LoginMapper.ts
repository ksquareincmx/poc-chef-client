import { ILoginResponseDTO, ILoginResponse } from "../models/Login";

export const toEntity = (dto: ILoginResponseDTO): ILoginResponse => {
  if (dto.errors) {
    const errors = Array.isArray(dto.errors) ? dto.errors : [dto.errors];
    return { errors };
  } else {
    const { user, jwt } = dto.data;
    return { user, jwt };
  }
};
