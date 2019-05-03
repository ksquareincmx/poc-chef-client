import { IEvent } from "src/partner/models";
import { IOrderProduct, IOrderProductDTO } from "./OrderProduct";
import { event } from "src/partner/models/Event";

export interface IUserEvent extends IEvent.IEvent {
  id: string;
  products: { [uuid: string]: IOrderProduct };
}

export interface IUserEventDTO extends IEvent.IEventDTO {
  id: string;
  products: IOrderProductDTO[];
}

export const userEvent = (): IUserEvent => ({ ...event(), id: "", products: {} });
