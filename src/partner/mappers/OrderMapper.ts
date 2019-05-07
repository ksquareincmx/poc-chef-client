import { IOrder, IOrderDTO } from "../models/Order";
import { numberDecimals } from "src/common/utils/utils";

export const toEntity = (dto: IOrderDTO): IOrder => {
  return {
    id: dto.id,
    order: dto.order,
    products: dto.products,
    date: dto.date,
    total: numberDecimals(dto.total),
    paid: dto.paid,
    userName: dto.user_name,
    checked: false,
  };
};
