import eventMapper from "../mappers/EventMapper";
import { IEvent } from "../interfaces/Event";

export interface IEventService {
  getCurrentEvents: () => Promise<IEvent[]>;
  getPastEvents: () => Promise<IEvent[]>;
}

const eventService: IEventService = {
  getCurrentEvents: () => {
    return fetch("/api/current_events.json")
      .then(res => res.json())
      .then(data => data.events.map(eventMapper.toEntity));
  },

  getPastEvents: () => {
    return fetch("/api/past_events.json")
      .then(res => res.json())
      .then(data => data.events.map(eventMapper.toEntity));
  }
};

export default eventService;
