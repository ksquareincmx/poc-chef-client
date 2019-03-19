import { IOrder } from "src/partner/models/Order";
import { OrderMapper } from "src/partner/mappers";

export interface IOrderService {
  getOrdersByUserId: (userId: number) => Promise<IOrder[]>;
}

export const orderService: IOrderService = {
  getOrdersByUserId: async (userId: number) => {
    try {
      const res = await fetch("/api/user_orders.json");
      const data = await res.json();
      return data.orders.map(OrderMapper.toEntity);
    } catch (err) {
      console.log(err);
    }
  }
};
