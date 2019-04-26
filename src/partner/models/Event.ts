import { IProduct, product } from "./Product";
import { IOrder } from "./Order";

export interface IEvent {
  id?: string;
  name: string;
  expirationDate: Date;
  endHour: Date;
  createdBy: string;
  total: number;
  markedAsFinished: boolean;
  cancelled: boolean;
  createdAt: Date;
  updatedAt: Date;
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
  createdAt: new Date(),
  updatedAt: new Date(),
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
  orders: IOrder[];
  products?: IProduct[];
}
