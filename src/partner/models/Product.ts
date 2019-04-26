export interface IProduct {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  [key: string]: any;
}

export interface IProductDTO {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  [key: string]: any;
}

export const product = (): IProduct => {
  return {
    id: "",
    name: "",
    description: "",
    quantity: 0,
    price: 0,
  };
};
