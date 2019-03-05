import { IOrderEntity, IOrderDTO } from "../models/Order";

export const toEntity = (dto: IOrderDTO): IOrderEntity => {
  return {
    id: dto.id,
    order: dto.order,
    products: dto.products,
    date: dto.date,
    total: dto.total,
    paid: dto.paid,
    checked: false
  };
};
