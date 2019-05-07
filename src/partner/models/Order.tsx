import { IProduct, product } from "./Product";

export interface IOrder {
  id: string;
  order: string;
  products: IProduct[];
  date: number;
  total: string;
  paid: boolean;
  userName: string;
  checked: boolean;
  [key: string]: any;
}

export interface IOrderDTO {
  id: string;
  order: string;
  user_name: string;
  products: IProduct[];
  date: number;
  total: number;
  paid: boolean;
}

export const order = (): IOrder => {
  return {
    id: "",
    order: "",
    products: [product()],
    date: Date.now(),
    total: "",
    userName: "",
    paid: false,
    checked: false,
  };
};
