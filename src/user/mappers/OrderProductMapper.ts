import cuid from "cuid";
import { IOrderProduct, IOrderProductDTO } from "../models/OrderProduct";

export const toEntity = (dto: IOrderProductDTO): IOrderProduct => {
  return {
    id: dto.id || cuid(),
    name: dto.name,
    price: dto.price,
    quantity: dto.quantity || 0,
    subtotal: dto.subtotal,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
  };
};

export const toDTO = (product: IOrderProduct): IOrderProductDTO => {
  const productDTO: IOrderProductDTO = {
    id: product.id,
    name: product.name,
    price: Number(product.price),
    quantity: Number(product.quantity),
    subtotal: Number(product.subtotal),
    ["created_at"]: product.createdAt,
    ["updated_at"]: product.updatedAt,
  };
  return productDTO;
};
