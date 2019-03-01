export interface INewEvent {
  eventName: string;
  startDate: Date;
  expirationDate: Date;
  startDateStr: string;
  expirationDateStr: string;
  starHour: string;
  expirationHour: string;
  pocChucTortaUnitPrice: number;
  shrimpTortaUnitPrice: number;
}

export interface INewEventDTO {
  event_name: string;
  start_date: number; // epoch,
  end_date: number; // epoch
  start_hour: number; // epoch
  end_hour: number; // epoch
  poc_chuc_torta_unitary_price: number;
  shrimp_torta_unitary_price: number;
}

export interface ICreatedEvent {
  id: string;
  eventName: string;
  startDate: Date;
  expirationDate: Date;
  startDateString: string;
  expirationDateString: string;
  starHour: string;
  expirationHour: string;
  pocChucTortaUnitPrice: number;
  shrimpTortaUnitPrice: number;
}

export interface ICreatedEventDTO {
  id: string;
  event_name: string;
  start_date: number; // epoch,
  end_date: number; // epoch
  start_hour: number; // epoch
  end_hour: number; // epoch
  poc_chuc_torta_unitary_price: number;
  shrimp_torta_unitary_price: number;
}
