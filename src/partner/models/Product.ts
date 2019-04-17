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

export const product = (): IProduct => {
  return {
    name: "",
    quantity: 0,
    price: "",
  };
};
