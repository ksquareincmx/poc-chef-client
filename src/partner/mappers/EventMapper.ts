import { IEvent, IEventDTO } from "src/partner/models/Event";
import { IProductDTO } from "../models/Product";
import { ProductMapper } from ".";

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
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    orders: [],
    products: {},
  };
  if (dto.products) {
    dto.products.forEach((product: IProductDTO) => {
      if (product.id) {
        eventData.products[product.id] = ProductMapper.toEntity(product);
      }
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
    ["created_at"]: event.createdAt,
    ["updated_at"]: event.updatedAt,
    orders: [],
    products: [],
  };

  Object.keys(event.products).forEach(product => {
    eventDTO.products.push(ProductMapper.toDTO(event.products[product]));
  });

  return eventDTO;
};
