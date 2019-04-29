import { IEvent } from "src/partner/models/Event";

export const dateComparator = (a: IEvent, b: IEvent) => {
  return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0;
};
