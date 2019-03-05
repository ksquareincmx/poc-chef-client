import { IEvent } from "src/partner/models/Event";
import { EventMapper } from "src/partner/mappers";

export interface IEventService {
  getCurrentEvents: () => Promise<IEvent[]>;
  getPastEvents: () => Promise<IEvent[]>;
}

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

};
