import { IEventDTO } from "src/partner/models/Event";
import { IUserEvent } from "../models/UserEvent";
import { IProductDTO } from "src/partner/models/Product";
import { OrderProductMapper } from ".";

export const toEntity = (dto: IEventDTO): IUserEvent => {
  const h = dto.end_hour / 60;
  const m = dto.end_hour % 60;
  const endHour = new Date();
  endHour.setHours(h);
  endHour.setMinutes(m);

  const eventData: IUserEvent = {
    id: dto.id,
    name: dto.name,
    expirationDate: new Date(dto.expiration_date),
    endHour,
    createdBy: dto.created_by,
    total: dto.total,
    markedAsFinished: dto.marked_as_finished,
    cancelled: dto.cancelled,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    orders: [],
    products: {},
  };
  if (dto.products) {
    dto.products.forEach((product: IProductDTO) => {
      if (product.id) {
        eventData.products[product.id] = OrderProductMapper.toEntity(product);
      }
    });
  }

  return eventData;
};
