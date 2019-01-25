import React from "react";
import { IEvent } from "../../interfaces/Event";
import EventListItem from "./EventListItem";
import { List } from "../ui/List/List";

interface IEventListProps {
  events: IEvent[];
}

const EventList: React.SFC<IEventListProps> = props => {
  if (props.events.length === 0) {
    return <p>there are not events to show</p>;
  }

  return (
    <List>
      {props.events.map(e => (
        <EventListItem key={e.id} eventInfo={e} />
      ))}
    </List>
  );
};

export default EventList;
