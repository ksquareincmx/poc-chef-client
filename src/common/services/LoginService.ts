import { ILoginResponse } from "../models/Login";
import { LoginMapper } from "../mappers";

export interface ILoginService {
  login: (username: string, password: string) => Promise<ILoginResponse>;
}

export const loginService: ILoginService = {
  login: async (email: string, password: string) => {
    try {
      const config = {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
      };
      const res = await fetch("http://localhost:3000/v1/auth/login", config);
      const loginRes = await res.json();
      return LoginMapper.toEntity(loginRes);
    } catch (err) {
      return err;
    }
  }
};
