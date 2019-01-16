export interface IProduct {
  name: string;
  type: string;
  quantity: number;
  price: number;
}

export interface IOrderEntity {
  id: number;
  order: string;
  products: IProduct[];
  date: string;
  total: number;
}
