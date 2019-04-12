import { ILoginResponse } from "../models/Login";
import { LoginMapper } from "../mappers";
import { IUser, user } from "../models/User";
import { storageService } from "./StorageService";
import { RouteComponentProps } from "react-router";

export interface ILoginService {
  login: (username: string, password: string) => Promise<ILoginResponse>;
  getCurrentUser: () => IUser;
  setUser: (userData: IUser) => void;
  setJWT: (jwt: string) => void;
  getJWT: () => any;
  isUserLogged: () => boolean;
  loginWithGoogle: (idToken: string) => Promise<any>;
}

export const loginService: ILoginService = {
  login: async (email: string, password: string) => {
    try {
      const config = {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
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
  },
  isUserLogged: function() {
    const userLogged = this.getCurrentUser();
    return userLogged.id !== "";
  },
  loginWithGoogle: async (idToken: string) => {
    try {
      const config = {
        method: "POST",
        body: JSON.stringify({ idToken }),
        headers: { "Content-Type": "application/json" },
      };
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/googleLogin`,
        config,
      );
      const authRes = await res.json();
      return authRes;
    } catch (err) {
      return err;
    }
  },
};
