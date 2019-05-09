import { loginService } from "src/common/services";
import { IUserEvent } from "../models/UserEvent";
import { UserEventMapper, OrderMapper } from "../mappers";
import { IOrder } from "../models/Order";

const headersConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: ``,
  },
};
const postConfig = { method: "post", body: "", ...headersConfig };
const putConfig = { method: "put", body: "", ...headersConfig };
const getConfig = { method: "get", ...headersConfig };

export interface IOrderService {
  getUserOrders: (pastOrders: boolean) => Promise<IOrder[]>;
  postOrder: (order: IUserEvent) => Promise<IOrder>;
  getOrder: (orderId: string) => Promise<IOrder>;
  putOrder: (order: IOrder) => Promise<IOrder>;
}

export const OrderService: IOrderService = {
  getUserOrders: async (pastOrders: boolean) => {
    getConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
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
  getOrder: async (orderId: string) => {
    getConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/user/api/v1/orders/${orderId}`,
      getConfig,
    );
    const data = await res.json();
    if (data.statusCode !== 200) {
      throw new Error(data.message);
    }
    return OrderMapper.toEntity(data.data);
  },
  postOrder: async (userEvent: IUserEvent) => {
    postConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    const order = UserEventMapper.toOrderDTO(userEvent);
    delete order["id"]; //not required on post and put requests
    postConfig.body = JSON.stringify(order);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user/api/v1/orders`, postConfig);
    const data = await res.json();

    if (data.statusCode !== 201) {
      throw new Error("Error at creating new order");
    }

    return data.data;
  },
  putOrder: async (order: IOrder) => {
    putConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    const orderMapped = OrderMapper.toDTO(order);
    delete orderMapped["id"]; //not required on post and put requests
    putConfig.body = JSON.stringify(orderMapped);
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/user/api/v1/orders/${order.id}`,
      putConfig,
    );
    const data = await res.json();

    if (data.statusCode !== 201) {
      throw new Error(data.message);
    }

    return data.data;
  },
};
