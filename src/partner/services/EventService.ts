import eventMapper from "../mappers/EventMapper";
import { IEvent } from "../interfaces/Event";

export interface IEventService {
  getAll: () => Promise<IEvent[]>;
}

const eventService: IEventService = {
  getAll: () => {
    return fetch("/api/events.json")
      .then(res => res.json())
      .then(data => data.events.map(eventMapper.toEntity));
  }
};

export default eventService;
