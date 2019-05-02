import { IUserEvent } from "../models/UserEvent";
import { loginService } from "src/common/services";
import { UserEventMapper } from "../mappers";

const headersConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${loginService.getJWT()}`,
  },
};
const postConfig = { method: "post", body: "", ...headersConfig };
const putConfig = { method: "put", body: "", ...headersConfig };
const getConfig = { method: "get", ...headersConfig };

export interface IUserEventService {
  getUserEvents: () => Promise<IUserEvent[]>;
}

export const UserEventService: IUserEventService = {
  getUserEvents: async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/user/api/v1/events?type=current`,
      getConfig,
    );
    const data = await res.json();
    if (data.statusCode !== 200) {
      throw new Error("Error at fetching orders");
    }
    return data.data.map(UserEventMapper.toEntity);
  },
};
