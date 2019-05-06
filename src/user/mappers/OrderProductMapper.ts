import cuid from "cuid";
import { IProductDTO } from "src/partner/models/Product";
import { IOrderProduct, IOrderProductDTO } from "../models/OrderProduct";

export const toEntity = (dto: IProductDTO): IOrderProduct => {
  return {
    id: dto.id || cuid(),
    name: dto.name,
    price: dto.price,
    quantity: 0,
    subtotal: 0,
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
