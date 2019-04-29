import { IProduct, IProductDTO } from "./Product";
import { IOrder, IOrderDTO } from "./Order";

export interface IEvent {
  id?: string;
  name: string;
  expirationDate: Date;
  endHour: Date;
  createdBy: string;
  total: number;
  markedAsFinished: boolean;
  cancelled: boolean;
  createdAt: number;
  updatedAt: number;
  orders: IOrder[]; //only client app
  products: { [uuid: string]: IProduct };
}

export const event = (): IEvent => ({
  id: "",
  name: "",
  expirationDate: new Date(),
  endHour: new Date(),
  createdBy: "",
  total: 0,
  markedAsFinished: false,
  cancelled: false,
  createdAt: Date.now(),
  updatedAt: Date.now(),
  orders: [],
  products: {},
});

export interface IEventDTO {
  id?: string;
  name: string;
  expiration_date: number;
  end_hour: number;
  created_by: string;
  total: number;
  marked_as_finished: boolean;
  cancelled: boolean;
  created_at: number;
  updated_at: number;
  orders: IOrderDTO[];
  products: IProductDTO[];
}
