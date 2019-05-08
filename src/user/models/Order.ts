import { IOrderProduct, IOrderProductDTO } from "./OrderProduct";

export interface IOrder {
  id: string;
  userName: string;
  eventName: string;
  eventId: string;
  total: number;
  orderNumber: number;
  products: { [uuid: string]: IOrderProduct };
  createdBy: string;
  paid: boolean;
  cancelled: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface IOrderDTO {
  id: string;
  user_name: string;
  event_id: string;
  event_name: string;
  order_number: number;
  total: number;
  products: IOrderProductDTO[];
  created_by: string;
  paid: boolean;
  cancelled: boolean;
  created_at: number;
  updated_at: number;
}

export const order = () => ({
  id: "",
  userName: "",
  eventName: "",
  eventId: "",
  total: 0,
  orderNumber: 0,
  products: {},
  createdBy: "",
  paid: false,
  cancelled: false,
  createdAt: Date.now(),
  updatedAt: Date.now(),
});
