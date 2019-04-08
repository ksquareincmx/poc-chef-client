import { IUser } from "src/common/models/User";
import { UserMapper } from "../mappers";

export interface IUserService {
  getCurrentUser: () => Promise<IUser>;
}

export const userService: IUserService = {
  getCurrentUser: async () => {
    try {
      const user = await fetch("api/user");
      const res = await user.json();
      return UserMapper.toEntity(res);
    } catch (err) {
      return err;
    }
  }
};
