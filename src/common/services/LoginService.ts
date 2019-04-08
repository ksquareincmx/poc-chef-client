import { ILoginResponse } from "../models/Login";
import { LoginMapper } from "../mappers";
import { IUser, user } from "../models/User";
import { storageService } from "./StorageService";

export interface ILoginService {
  login: (username: string, password: string) => Promise<ILoginResponse>;
  getCurrentUser: () => IUser;
  setUser: (userData: IUser) => void;
  setJWT: (jwt: string) => void;
  getJWT: () => any;
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
  },
  setUser: (userData: IUser) => {
    storageService.setItem("user_data", userData);
  },
  getCurrentUser: () => {
    const userData = storageService.getItem("user_data");
    if (userData !== "" && userData.id !== "") {
      return userData;
    }
    return user();
  },
  setJWT: (jwt: string) => {
    storageService.setItem("user_jwt", jwt);
  },
  getJWT: () => {
    return storageService.getItem("user_jwt");
  }
};
