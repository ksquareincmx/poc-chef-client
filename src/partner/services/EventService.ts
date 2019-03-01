import { IEvent } from "src/partner/models/Event";
import { EventMapper, OrderMapper } from "src/partner/mappers";
import { IOrderEntity } from "../models/Order";

export interface IEventService {
  getCurrentEvents: () => Promise<IEvent[]>;
  getPastEvents: () => Promise<IEvent[]>;
  getOrdersByEventId: (eventId: string) => Promise<IOrderEntity[]>;
}

export const eventService: IEventService = {
  getCurrentEvents: () => {
    return fetch("/api/current_events.json")
      .then(res => res.json())
      .then(data => data.events.map(EventMapper.toEntity));
  },

  getPastEvents: () => {
    return fetch("/api/past_events.json")
      .then(res => res.json())
      .then(data => data.events.map(EventMapper.toEntity));
  },

  getOrdersByEventId: (eventId: string) => {
    return fetch("/api/event_orders.json")
      .then(res => res.json())
      .then(data => data.orders.map(OrderMapper.toEntity));
  }
};
