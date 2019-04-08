import { IUser } from "./User";

export interface ILoginResponse {
  jwt?: string;
  user?: IUser;
  errors?: ILoginErrorField[];
}

export interface ILoginResponseDTO {
  data: ILoginData;
  errors?: ILoginErrorField[] | ILoginErrorField;
  code: number;
  url: string;
}

export interface ILoginErrorField {
  field: string;
  error: string;
}

export interface ILoginData {
  jwt: string;
  user: IUser;
}
