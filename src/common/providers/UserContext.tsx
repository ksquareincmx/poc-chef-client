import React from "react";
import { IUser, user } from "../models/User";

export const UserContext = React.createContext({
  userData: user(),
  setUserData: (userData: IUser) => {},
  getUserData: (): IUser => {
    return user();
  }
});

export const UserProvider: React.FC<{}> = props => {
  const [userData, setUserDataState] = React.useState<IUser>(user());

  const setUserData = (userData: IUser) => {
    setUserDataState(userData);
  };

  const getUserData = () => {
    return userData;
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, getUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};
