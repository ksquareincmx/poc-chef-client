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

export const toDTO = (order: IOrder): IOrderDTO => {
  const newOrder: IOrderDTO = {
    id: order.id,
    ["user_name"]: order.userName,
    ["event_id"]: order.eventId,
    ["event_name"]: order.eventName,
    ["order_number"]: order.orderNumber,
    total: order.total,
    products: [],
    ["created_by"]: order.createdBy,
    paid: order.paid,
    cancelled: order.cancelled,
    ["created_at"]: order.createdAt,
    ["updated_at"]: order.createdAt,
  };
  if (Object.keys(order.products).length > 0) {
    Object.keys(order.products).forEach(key => {
      newOrder.products.push(orderProductMapper.toDTO(order.products[key]));
    });
  }
  return newOrder;
};
