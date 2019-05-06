import * as orderProductMapper from "./OrderProductMapper";
import { IOrder, IOrderDTO } from "../models/Order";

export const toModel = (order: IOrderDTO): IOrder => ({
  id: order.id,
  price: order.price,
  cancelled: order.cancelled,
  paid: order.paid,
  products: order.products.map(orderProductMapper.toEntity),
  userId: order.user_id,
  eventId: order.event_id,
  createdBy: order.created_by,
  createdAt: order.created_at,
  updatedAt: order.updated_at,
});
