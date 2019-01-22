import React from "react";
import { IEvent } from "../../interfaces/Event";
import EventListItem from "./EventListItem";
import { EventsContainer } from "../ui/EventList/EventListUI";

interface IEventListProps {
  events: IEvent[];
}

const EventList: React.SFC<IEventListProps> = props => {
  if (props.events.length === 0) {
    return <p>there are not events to show</p>;
  }

  return (
    <EventsContainer>
      {props.events.map(e => (
        <EventListItem key={e.id} eventInfo={e} />
      ))}
    </EventsContainer>
  );
};

export default EventList;
