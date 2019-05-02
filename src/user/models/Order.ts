import { IOrderProduct, IOrderProductDTO } from "./OrderProduct";

export interface IOrder {
  id: string;
  total: number;
  cancelled: boolean;
  paid: boolean;
  products: IOrderProduct[];
  userId: string;
  eventId: string;
  eventName: string;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

export interface IOrderDto {
  id: string;
  total: number;
  cancelled: boolean;
  paid: boolean;
  products: IOrderProductDTO[];
  user_id: string;
  event_id: string;
  event_name: string;
  created_by: string;
  created_at: number;
  updated_at: number;
}
