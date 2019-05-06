import * as orderProductMapper from "./OrderProductMapper";
import { IOrder, IOrderDTO } from "../models/Order";

export const toEntity = (order: IOrderDTO): IOrder => ({
  id: order.id,
  total: order.total,
  cancelled: order.cancelled,
  paid: order.paid,
  products: order.products.map(orderProductMapper.toEntity),
  userName: order.user_name,
  eventId: order.event_id,
  eventName: order.event_name,
  orderNumber: order.order_number,
  createdBy: order.created_by,
  createdAt: order.created_at,
  updatedAt: order.updated_at,
});
