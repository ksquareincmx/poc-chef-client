import { IEvent, IEventDTO } from "src/partner/models/Event";
import { product, IProduct } from "../models/Product";

export const toEntity = (dto: IEventDTO): IEvent => {
  const eventData: IEvent = {
    id: dto.id,
    name: dto.name,
    expirationDate: new Date(dto.expiration_date),
    endHour: new Date(dto.end_hour),
    createdBy: dto.created_by,
    total: dto.total,
    markedAsFinished: dto.marked_as_finished,
    cancelled: dto.cancelled,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
    //orders: [order()], //only client app
    products: {}, //to be added later
  };

  dto.products.forEach((product: IProduct) => {
    eventData.products[product.id] = { ...product };
  });

  return eventData;
};
