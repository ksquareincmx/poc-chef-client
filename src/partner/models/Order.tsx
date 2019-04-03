export interface IProduct {
  name: string;
  quantity: number;
  price: string;
  [key: string]: any;
}

export interface IProductDTO {
  name: string;
  quantity: number;
  price: number;
  [key: string]: any;
}

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
    checked: false
  };
};

export const product = (): IProduct => {
  return {
    name: "",
    quantity: 0,
    price: ""
  };
};
