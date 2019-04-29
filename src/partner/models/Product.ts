export interface IProduct {
  id: string;
  name: string;
  price: number;
  createdAt: number;
  updatedAt: number;
  [key: string]: any;
}

export interface IProductDTO {
  id?: string;
  name: string;
  price: number;
  created_at: number;
  updated_at: number;
  [key: string]: any;
}

export const product = (): IProduct => {
  return {
    id: "",
    name: "",
    price: 0,
    createdAt: 0,
    updatedAt: 0,
  };
};
