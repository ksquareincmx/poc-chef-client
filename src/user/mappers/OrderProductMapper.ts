import { IOrderProduct, IOrderProductDTO } from "../models/OrderProduct";

export const toModel = (orderProduct: IOrderProductDTO): IOrderProduct => ({
  id: orderProduct.id,
  name: orderProduct.name,
  quantity: orderProduct.quantity,
  price: orderProduct.price,
  subtotal: orderProduct.subtotal,
  createdAt: orderProduct.created_at,
  updatedAt: orderProduct.updated_at,
});
