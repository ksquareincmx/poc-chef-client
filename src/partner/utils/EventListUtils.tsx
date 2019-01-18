import { IEvent } from "../interfaces/Event";

export const CompDateEvent = (a: IEvent, b: IEvent) => {
  return a.startDate > b.startDate ? -1 : a.startDate < b.startDate ? 1 : 0;
};
