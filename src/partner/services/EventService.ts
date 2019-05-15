import { IEvent, IEventDTO } from "src/partner/models/Event";
import { EventMapper } from "src/partner/mappers";
import { loginService } from "src/common/services";

export interface IEventService {
  getCurrentEvents: () => Promise<IEvent[]>;
  getPastEvents: () => Promise<IEvent[]>;
  postEvent: (event: IEvent) => Promise<IEventDTO>;
  putEvent: (event: IEvent) => Promise<IEventDTO>;
  getEventById: (eventId: string) => Promise<IEvent>;
  cancelEvent: (eventId: string) => Promise<IEvent>;
}

const headersConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: ``,
  },
};

const postConfig = { method: "post", body: "", ...headersConfig };
const putConfig = { method: "put", body: "", ...headersConfig };
const getConfig = { method: "get", ...headersConfig };

export const eventService: IEventService = {
  getCurrentEvents: async () => {
    getConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events?type=current`, getConfig);
    const data = await res.json();
    if (data.statusCode !== 200) {
      throw new Error(data.message);
    }
    return data.data.map(EventMapper.toEntity);
  },

  getPastEvents: async () => {
    getConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events?type=past`, getConfig);
    const data = await res.json();
    if (data.statusCode !== 200) {
      throw new Error(data.message);
    }
    return data.data.map(EventMapper.toEntity);
  },
  getEventById: async (eventId: string) => {
    getConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events/${eventId}`, getConfig);
    const data = await res.json();
    if (data.statusCode !== 200) {
      throw new Error(data.message);
    }
    return EventMapper.toEntity(data.data);
  },
  postEvent: async (event: IEvent) => {
    delete event["id"]; //not allowed by the server
    postConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    postConfig.body = JSON.stringify(EventMapper.toDTO(event));
    const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events`, postConfig);
    const data = await res.json();
    if (data.statusCode !== 201) {
      throw new Error(data.message);
    }
    return data.data;
  },
  putEvent: async (event: IEvent) => {
    const { id: eventId, ...eventEntity } = event;
    putConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    putConfig.body = JSON.stringify(EventMapper.toDTO(eventEntity));
    const res = await fetch(`${process.env.REACT_APP_API_URL}/v1/events/${eventId}`, putConfig);
    const data = await res.json();
    if (data.statusCode !== 201) {
      throw new Error(data.message);
    }
    return data.data;
  },
  cancelEvent: async (eventId: string) => {
    postConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    postConfig.body = JSON.stringify({ action: "mark_as_finish" });
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/v1/events/${eventId}/actions`,
      postConfig,
    );
    const data = await res.json();
    if (data.statusCode !== 201) {
      throw new Error(data.message);
    }
    return data;
  },
};
