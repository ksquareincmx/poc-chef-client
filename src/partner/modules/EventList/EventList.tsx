import React from "react";
import { IEvent } from "src/partner/interfaces/Event";
import { List } from "src/partner/modules/ui/List/List";
import EventListItem from "./EventListItem";
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
