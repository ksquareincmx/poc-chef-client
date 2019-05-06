import { IOrderProduct, IOrderProductDTO } from "./OrderProduct";

export interface IOrder {
  id: string;
  userName: string;
  eventName: string;
  eventId: string;
  total: number;
  orderNumber: string;
  products: IOrderProduct[];
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
  order_number: string;
  total: number;
  products: IOrderProductDTO[];
  created_by: string;
  paid: boolean;
  cancelled: boolean;
  created_at: number;
  updated_at: number;
}
