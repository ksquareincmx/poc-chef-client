import { IProduct, IProductDTO } from "../models/Product";
import cuid from "cuid";

export const toEntity = (dto: IProductDTO): IProduct => {
  return {
    id: dto.id || cuid(),
    name: dto.name,
    price: dto.price,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
  };
};

export const toDTO = (product: IProduct): IProductDTO => {
  delete product["id"]; // not allowed on the server;
  const productDTO: IProductDTO = {
    name: product.name,
    price: Number(product.price),
    ["created_at"]: product.createdAt,
    ["updated_at"]: product.updatedAt,
  };

  return productDTO;
};
