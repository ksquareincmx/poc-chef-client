export interface IUser {
  id: string;
  name: string;
}

export interface IUserDTO {
  id: string;
  name: string;
}

export const user = (): IUser => {
  return {
    id: "",
    name: ""
  };
};
