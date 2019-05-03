import { IOrder } from "src/partner/models/Order";
import { loginService } from "src/common/services";
import { IUserEvent } from "../models/UserEvent";
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

export interface IOrderService {
  getOrdersByUserId: (userId: string) => Promise<IOrder[]>;
  postOrder: (order: IUserEvent) => Promise<IOrder>;
}

export const OrderService: IOrderService = {
  getOrdersByUserId: async (userId: string) => {
    try {
      const res = await fetch(`/api/orders.json`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  },
  postOrder: async (userEvent: IUserEvent) => {
    postConfig.body = JSON.stringify(UserEventMapper.toOrderDTO(userEvent));
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user/api/v1/orders`, postConfig);
    const data = await res.json();

    if (data.statusCode !== 201) {
      throw new Error("Error at creating new order");
    }

    return data.data;
  },
};
