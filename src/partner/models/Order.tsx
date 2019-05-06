import { IProduct, product } from "./Product";

export interface IOrder {
  id: string;
  order: string;
  products: IProduct[];
  date: number;
  total: string;
  paid: boolean;
  checked: boolean;
  [key: string]: any;
}

export interface IOrderDTO {
  id: string;
  order: string;
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
    paid: false,
    checked: false,
  };
};
