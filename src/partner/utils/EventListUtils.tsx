import { IEvent } from "../interfaces/Event";

export const dateComparator = (a: IEvent, b: IEvent) => {
  return a.startDate > b.startDate ? -1 : a.startDate < b.startDate ? 1 : 0;
};
