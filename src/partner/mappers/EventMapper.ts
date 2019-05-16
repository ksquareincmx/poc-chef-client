import { IEvent, IEventDTO } from "src/partner/models/Event";
import { IProductDTO } from "../models/Product";
import { ProductMapper, OrderMapper } from ".";
import moment from "moment";

export const toEntity = (dto: IEventDTO): IEvent => {
  const expirationDateTime = new Date(dto.expiration_date_time * 1000);
  const eventData: IEvent = {
    id: dto.id,
    name: dto.name,
    expirationDate: expirationDateTime,
    endHour: expirationDateTime,
    createdBy: dto.created_by,
    total: dto.total,
    cancelled: dto.cancelled,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    orders: dto.orders.map(OrderMapper.toEntity),
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
  const { expirationDate, endHour } = event;
  expirationDate.setHours(endHour.getHours());
  expirationDate.setMinutes(endHour.getMinutes());

  const eventDTO: IEventDTO = {
    id: event.id,
    name: event.name,
    ["expiration_date_time"]: moment(expirationDate).unix(),
    ["created_by"]: "",
    total: event.total,
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
