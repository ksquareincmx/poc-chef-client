import React from "react";
import { IEvent } from "src/partner/models";
import { EventCard } from "../EventCard";
import { IUserEvent } from "src/user/models/UserEvent";

interface IEventListProps {
  events: IUserEvent[];
}

export const EventList: React.FC<IEventListProps> = ({ events }) => {
  return (
    <div style={{ display: "grid", gridGap: "1rem", paddingTop: "1rem" }}>
      {events.map((event: IUserEvent) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
};
