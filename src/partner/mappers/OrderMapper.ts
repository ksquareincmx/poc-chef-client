import { IOrder, IOrderDTO } from "../models/Order";

export const toEntity = (dto: IOrderDTO): IOrder => {
  return {
    id: dto.id,
    order: dto.order,
    products: dto.products,
    date: dto.date,
    total: dto.total,
    paid: dto.paid,
    userName: dto.user_name,
    checked: false,
  };
};
