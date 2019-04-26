import { IEvent, IEventDTO } from "src/partner/models/Event";
import { EventMapper, OrderMapper } from "src/partner/mappers";
import { IOrder } from "../models/Order";
import { loginService } from "src/common/services";

export interface IEventService {
  getCurrentEvents: () => Promise<IEvent[]>;
  getPastEvents: () => Promise<IEvent[]>;
  getOrdersByEventId: (idEvent: string) => Promise<IOrder[]>;
  postEvent: (event: IEvent) => Promise<IEventDTO>;
}

const config = {
  method: "post",
  body: "",
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${loginService.getJWT()}` },
};

export const eventService: IEventService = {
  getCurrentEvents: async () => {
    try {
      const res = await fetch("/api/current_events.json");
      const data = await res.json();
      return data.events.map(EventMapper.toEntity);
    } catch (err) {
      console.error(err);
    }
  },

  getPastEvents: async () => {
    try {
      const res = await fetch("/api/past_events.json");
      const data = await res.json();
      return data.events.map(EventMapper.toEntity);
    } catch (err) {
      console.error(err);
    }
  },

  getOrdersByEventId: async (eventId: string) => {
    try {
      const res = await fetch("/api/event_orders.json");
      const data = await res.json();
      return data.orders.map(OrderMapper.toEntity);
    } catch (err) {
      console.error(err);
    }
  },
  postEvent: async (event: IEvent) => {
    try {
      const stateEvent = { ...event };
      delete stateEvent["id"]; //do not send to server
      delete stateEvent["products"]; //not allowed on server yet
      stateEvent.total = 10; // temporal fix
      config.body = JSON.stringify(EventMapper.toDTO(stateEvent));
      const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events`, config);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  },
};
