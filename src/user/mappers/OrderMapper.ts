import * as orderProductMapper from "./OrderProductMapper";
import { IOrder, IOrderDTO } from "../models/Order";

export const toEntity = (order: IOrderDTO): IOrder => {
  const newOrder: IOrder = {
    id: order.id,
    total: order.total,
    cancelled: order.cancelled,
    paid: order.paid,
    products: {},
    userName: order.user_name,
    eventId: order.event_id,
    eventName: order.event_name,
    orderNumber: order.order_number,
    createdBy: order.created_by,
    createdAt: order.created_at,
    updatedAt: order.updated_at,
  };
  if (order.products.length > 0) {
    order.products.forEach(product => {
      newOrder.products[product.id] = orderProductMapper.toEntity(product);
    });
  }
  return newOrder;
};
