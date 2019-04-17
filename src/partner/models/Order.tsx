import { IProduct, product } from "./Product";

export interface IOrder {
  id: string;
  order: string;
  products: IProduct[];
  date: string;
  total: string;
  paid: boolean;
  checked: boolean;
  [key: string]: any;
}

export interface IOrderDTO {
  id: string;
  order: string;
  products: IProduct[];
  date: string;
  total: number;
  paid: boolean;
}

export const order = (): IOrder => {
  return {
    id: "",
    order: "",
    products: [product()],
    date: "",
    total: "",
    paid: false,
    checked: false,
  };
};
