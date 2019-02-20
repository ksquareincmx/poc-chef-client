import { IEvent } from "src/partner/models/Event";
import { EventMapper } from "src/partner/mappers";

export interface IEventService {
  getCurrentEvents: () => Promise<IEvent[]>;
  getPastEvents: () => Promise<IEvent[]>;
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
};
