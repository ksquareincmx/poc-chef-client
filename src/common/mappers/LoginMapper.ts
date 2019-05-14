import { ILoginResponseDTO, ILoginResponse, ILoginErrorField } from "../models/Login";

export const toEntity = (dto: ILoginResponseDTO): ILoginResponse => {
  const { user, jwt } = dto.data;
  return { user, jwt };
};

export const getLoginErrors = (dto: ILoginResponseDTO): ILoginErrorField[] => {
  let errors: ILoginErrorField[] = [];
  if (dto.errors) {
    const fielErrors = Array.isArray(dto.errors) ? dto.errors : [dto.errors];
    errors.push(...fielErrors);
  }

  return errors;
};
