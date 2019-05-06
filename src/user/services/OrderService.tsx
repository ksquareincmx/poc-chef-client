import { loginService } from "src/common/services";
import { IUserEvent } from "../models/UserEvent";
import { UserEventMapper, OrderMapper } from "../mappers";
import { IOrder } from "../models/Order";

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
  getUserOrders: (pastOrders: boolean) => Promise<IOrder[]>;
  postOrder: (order: IUserEvent) => Promise<IOrder>;
}

export const OrderService: IOrderService = {
  getUserOrders: async (pastOrders: boolean) => {
    const ordersType = pastOrders ? "past" : "current";
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/user/api/v1/orders?type=${ordersType}`,
      getConfig,
    );
    const data = await res.json();
    if (data.statusCode !== 200) {
      throw new Error("Error at getting orders");
    }
    return data.data.map(OrderMapper.toEntity);
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
