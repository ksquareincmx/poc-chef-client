import React from "react";
import { IEvent } from "src/partner/models/Event";
import { EventListItem } from "./EventListItem";
import { ListStyled } from "src/partner/modules/ui/";

export interface IEventListProps {
  events: IEvent[];
  handleCancelEvent: (e: any) => void;
  onEdit: (event: any) => void;
}

export const EventList: React.SFC<IEventListProps> = props => {
  if (props.events.length === 0) {
    return <p>there are not events to show</p>;
  }

  return (
    <ListStyled.List>
      {props.events.map(e => (
        <EventListItem
          handleCancelEvent={props.handleCancelEvent}
          key={e.id}
          eventInfo={e}
          onEdit={props.onEdit}
        />
      ))}
    </ListStyled.List>
  );
};
