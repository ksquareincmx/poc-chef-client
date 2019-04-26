import { IEvent, IEventDTO } from "src/partner/models/Event";
import { product, IProduct } from "../models/Product";

export const toEntity = (dto: IEventDTO): IEvent => {
  const h = dto.end_hour / 60;
  const m = dto.end_hour % 60;
  const endHour = new Date();
  endHour.setHours(h);
  endHour.setMinutes(m);

  const eventData: IEvent = {
    id: dto.id,
    name: dto.name,
    expirationDate: new Date(dto.expiration_date),
    endHour,
    createdBy: dto.created_by,
    total: dto.total,
    markedAsFinished: dto.marked_as_finished,
    cancelled: dto.cancelled,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
    orders: [], //only client app
    products: {}, //to be added later
  };
  if (dto.products) {
    dto.products.forEach((product: IProduct) => {
      eventData.products[product.id] = { ...product };
    });
  }

  return eventData;
};

export const toDTO = (event: IEvent): IEventDTO => {
  const eventDTO: IEventDTO = {
    id: event.id,
    name: event.name,
    ["expiration_date"]: event.expirationDate.getTime(),
    ["end_hour"]: event.endHour.getHours() * 60 + event.endHour.getMinutes(),
    ["created_by"]: "",
    total: event.total,
    ["marked_as_finished"]: event.markedAsFinished,
    cancelled: event.cancelled,
    ["created_at"]: event.createdAt.getTime(),
    ["updated_at"]: event.updatedAt.getTime(),
    orders: event.orders, //only client app
    //products: [], //to be added later
  };

  if (event.products) {
    /* to be added later
    Object.keys(event.products).forEach(product => {
      eventDTO.products.push(event.products[product]);
    });
    */
  }

  return eventDTO;
};
