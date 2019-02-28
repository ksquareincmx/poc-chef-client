export interface IProduct {
  name: string;
  type: string;
  quantity: number;
  price: number;
  [key: string]: any;
}

export interface IOrderEntity {
  id: number;
  order: string;
  products: IProduct[];
  date: string;
  total: number;
}

export interface IEventEntity {
  name: string;
  startDate: string;
  endDate: string;
  startHour: string;
  endHour: string;
  tortaPocchuc: number;
  tortaCamaron: number;
}

export interface IEvent {
  name: string;
  startDate: string;
  endDate: string;
  startHour: string;
  endHour: string;
  tortaPocchuc: number;
  tortaCamaron: number;
}
