import React from "react";
import { IEvent } from "src/partner/models";
import { EventCard } from "../EventCard";

interface IEventListProps {
  events: IEvent.IEvent[];
}

export const EventList: React.FC<IEventListProps> = ({ events }) => {
  return (
    <div style={{ display: "grid", gridGap: "1rem", paddingTop: "1rem" }}>
      {events.map((event: IEvent.IEvent) => (
        <EventCard event={event} />
      ))}
    </div>
  );
};
