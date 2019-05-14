import { ILoginResponse } from "../models/Login";
import { LoginMapper } from "../mappers";
import { IUser, user } from "../models/User";
import { storageService } from "./StorageService";
import { getLoginErrors } from "../mappers/LoginMapper";

export interface ILoginService {
  login: (username: string, password: string) => Promise<ILoginResponse>;
  getCurrentUser: () => IUser;
  setUser: (userData: IUser) => void;
  setJWT: (jwt: string) => void;
  getJWT: () => string;
  isUserLogged: () => boolean;
  loginWithGoogle: (idToken: string) => Promise<ILoginResponse>;
}

export const loginService: ILoginService = {
  login: async (email: string, password: string) => {
    const config = {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/auth/login`, config);
    const loginRes = await res.json();
    if (loginRes.statusCode !== 200) {
      const errors = getLoginErrors(loginRes).join(", ");
      throw new Error(errors ? errors : loginRes.message);
    }
    return LoginMapper.toEntity(loginRes);
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
    const config = {
      method: "POST",
      body: JSON.stringify({ idToken }),
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/user/api/v1/auth/googleLogin`,
      config,
    );
    const authRes = await res.json();
    if (authRes.statusCode !== 200) {
      throw new Error(authRes.message);
    }
    return LoginMapper.toEntity(authRes);
  },
};
