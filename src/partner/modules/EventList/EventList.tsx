import React from "react";
import { IEvent } from "src/partner/models/Event";
import { ListStyled } from "src/partner/modules/ui/";
import { EmptyEvents } from "../EmptyEvents";
import { CardEvent } from "../CardEvent";
import cuid from "cuid";

export interface IEventListProps {
  events: IEvent[];
  isPastEventView?: boolean;
}

export const EventList: React.SFC<IEventListProps> = ({ events, isPastEventView }) => {
  if (events.length === 0) {
    return <EmptyEvents />;
  }

  return (
    <ListStyled.List>
      {events.map(e => (
        <CardEvent key={e.id ? e.id : cuid()} eventInfo={e} isPastEventView={isPastEventView} />
      ))}
    </ListStyled.List>
  );
};
