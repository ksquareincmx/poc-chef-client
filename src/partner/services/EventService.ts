import { EventMapper, NewEventMapper } from "./../mappers";
import { ICreatedEvent } from "./../models/NewEvent";
import { IEvent } from "../models/Event";

export interface IEventService {
  getCurrentEvents: () => Promise<IEvent[]>;
  getPastEvents: () => Promise<IEvent[]>;
  createEvent: () => Promise<ICreatedEvent>;
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

  createEvent: () => {
    return fetch("/api/")
      .then(res => res.json())
      .then(NewEventMapper.newEventMapper.toEntity);
  }
};
