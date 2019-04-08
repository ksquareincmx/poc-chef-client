import { ILoginResponseDTO, ILoginResponse, ILoginErrorField } from "../models/Login";

export const toEntity = (dto: ILoginResponseDTO): ILoginResponse => {
  if (dto.status && dto.status !== 200) {
    return { errors: getErrors(dto) };
  } else {
    const { user, jwt } = dto.data;
    return { user, jwt };
  }
};

const getErrors = (dto: ILoginResponseDTO): ILoginErrorField[] => {
  let errors: ILoginErrorField[] = [];
  if (dto.status === 401 && dto.message) {
    errors.push({ field: "password", error: "Invalid password" });
  }
  if (dto.errors) {
    const fielErrors = Array.isArray(dto.errors) ? dto.errors : [dto.errors];
    errors.push(...fielErrors);
  }

  return errors;
};
