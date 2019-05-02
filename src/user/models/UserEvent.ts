import { IEvent } from "src/partner/models";
import { IOrderProduct } from "./OrderProduct";
import { event } from "src/partner/models/Event";

export interface IUserEvent extends IEvent.IEvent {
  products: { [uuid: string]: IOrderProduct };
}

export const userEvent = (): IUserEvent => ({ ...event(), products: {} });
