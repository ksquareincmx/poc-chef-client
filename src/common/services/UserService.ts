import { IUser } from "src/common/models/User";
import { UserMapper } from "../mappers";

interface IUserService {
  getCurrentUser: () => Promise<IUser>;
}

export const userService: IUserService = {
  getCurrentUser: async () => {
    const user = await fetch("api/user");
    const res = await user.json();
    return UserMapper.toEntity(res);
  }
};
