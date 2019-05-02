export interface IOrderProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  createdAt: number;
  updatedAt: number;
}

export interface IOrderProductDTO {
  id: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  created_at: number;
  updated_at: number;
}

export const orderProduct = (): IOrderProduct => {
  return {
    id: "",
    name: "",
    price: 0,
    quantity: 0,
    subtotal: 0,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
};
