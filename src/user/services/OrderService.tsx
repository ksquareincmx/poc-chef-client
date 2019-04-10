import { IOrder } from "src/partner/models/Order";
import * as orderMapper from "../mappers/OrderMapper";

export interface IOrderService {
  getOrdersByUserId: (userId: string) => Promise<IOrder[]>;
}

export const orderService: IOrderService = {
  getOrdersByUserId: async (userId: string) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/orders`);
      const data = await res.json();
      return data.orders.map(orderMapper.toModel);
    } catch (err) {
      console.log(err);
    }
  }
};
