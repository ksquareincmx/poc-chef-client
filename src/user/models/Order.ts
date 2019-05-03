import { IOrderProduct, IOrderProductDTO } from "./OrderProduct";

export interface IOrder {
  id: string;
  userId: string;
  eventId: string;
  price: number;
  products: IOrderProduct[];
  createdBy: string;
  paid: boolean;
  cancelled: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface IOrderDTO {
  id: string;
  user_id: string;
  event_id: string;
  price: number;
  products: IOrderProductDTO[];
  created_by: string;
  paid: boolean;
  cancelled: boolean;
  created_at: number;
  updated_at: number;
}
