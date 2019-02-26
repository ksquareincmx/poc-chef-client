import React from "react";
import { IEvent } from "src/partner/models/Event";
import { EventListItem } from "./EventListItem";
import { ListStyled } from "src/partner/modules/ui/";

interface IEventListProps {
  events: IEvent[];
  onEdit: Function;
}

export const EventList: React.SFC<IEventListProps> = props => {
  if (props.events.length === 0) {
    return <p>there are not events to show</p>;
  }

  return (
    <ListStyled.List>
      {props.events.map(e => (
        <EventListItem key={e.id} eventInfo={e} onEdit={props.onEdit} />
      ))}
    </ListStyled.List>
  );
};
