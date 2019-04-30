import { IEvent, IEventDTO, event } from "src/partner/models/Event";
import { EventMapper, OrderMapper } from "src/partner/mappers";
import { IOrder } from "../models/Order";
import { loginService } from "src/common/services";

export interface IEventService {
  getCurrentEvents: () => Promise<IEvent[]>;
  getPastEvents: () => Promise<IEvent[]>;
  getOrdersByEventId: (idEvent: string) => Promise<IOrder[]>;
  postEvent: (event: IEvent) => Promise<IEventDTO>;
  putEvent: (event: IEvent) => Promise<IEventDTO>;
  getEventById: (eventId: string) => Promise<IEvent>;
}

const headersConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${loginService.getJWT()}`,
  },
};
const postConfig = { method: "post", body: "", ...headersConfig };
const putConfig = { method: "put", body: "", ...headersConfig };
const getConfig = { method: "get", ...headersConfig };

export const eventService: IEventService = {
  getCurrentEvents: async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events?type=current`, getConfig);
      const data = await res.json();
      return data.data.map(EventMapper.toEntity);
    } catch (err) {
      console.error(err);
    }
  },

  getPastEvents: async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events?type=past`, getConfig);
      const data = await res.json();
      return data.data.map(EventMapper.toEntity);
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
  getEventById: async (eventId: string) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events/${eventId}`, getConfig);
    const data = await res.json();
    if (data.statusCode !== 200) {
      throw new Error("Error at getting the event");
    }
    return EventMapper.toEntity(data.data);
  },
  postEvent: async (event: IEvent) => {
    delete event["id"]; //not allowed by the server

    postConfig.body = JSON.stringify(EventMapper.toDTO(event));
    const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events`, postConfig);
    const data = await res.json();
    if (data.statusCode !== 201) {
      throw new Error("Error at saving new event");
    }
    return data.data;
  },
  putEvent: async (event: IEvent) => {
    const { id: eventId, ...eventEntity } = event;

    putConfig.body = JSON.stringify(EventMapper.toDTO(eventEntity));
    const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events/${eventId}`, putConfig);
    const data = await res.json();
    if (data.statusCode !== 201) {
      throw new Error("Error at updating event");
    }
    return data.data;
  },
};
