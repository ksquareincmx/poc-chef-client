export interface IEvent {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  pocChucTortaUnitPrice: number;
  pocChucTortaAmount: number;
  shrimpTortaUnitPrice: number;
  shrimpTortaAmount: number;
  total: number;
}

export interface IEventDTO {
  id: string;
  name: string;
  start_date: number;
  end_date: number;
  poc_chuc_torta_unit_price: number;
  poc_chuc_torta_amount: number;
  shrimp_torta_unit_price: number;
  shrimp_torta_amount: number;
  total: number;
}
