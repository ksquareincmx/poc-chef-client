export interface IEvent {
  id: string;
  orderNumber: string;
  name: string;
  startDate: Date;
  endDate: Date;
  startDateString: string;
  startTimeString: string;
  endDateString: string;
  endTimeString: string;
  pocChucTortaUnitPrice: number;
  pocChucTortaAmount: number;
  pocChucTotal: number;
  shrimpTortaUnitPrice: number;
  shrimpTortaAmount: number;
  shrimpTotal: number;
  total: number;
}

export const InitialEvent = (): IEvent => ({
  id: "",
  orderNumber: "",
  name: "",
  startDate: new Date(),
  endDate: new Date(),
  startDateString: "",
  startTimeString: "",
  endDateString: "",
  endTimeString: "",
  pocChucTortaUnitPrice: 0,
  pocChucTortaAmount: 0,
  pocChucTotal: 0,
  shrimpTortaUnitPrice: 0,
  shrimpTortaAmount: 0,
  shrimpTotal: 0,
  total: 0,
});

export interface IEventDTO {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  poc_chuc_torta_unit_price: number;
  poc_chuc_torta_amount: number;
  shrimp_torta_unit_price: number;
  shrimp_torta_amount: number;
  total: number;
}
