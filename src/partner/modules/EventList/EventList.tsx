import React from "react";
import { IEvent } from "src/partner/models/Event";
import { ListStyled } from "src/partner/modules/ui/";
import { EmptyEvents } from "../EmptyEvents";
import { CardEvent } from "../CardEvent";
import cuid from "cuid";

export interface IEventListProps {
  events: IEvent[];
}

export const EventList: React.SFC<IEventListProps> = props => {
  if (props.events.length === 0) {
    return <EmptyEvents />;
  }

  return (
    <ListStyled.List>
      {props.events.map(e => (
        <CardEvent key={e.id ? e.id : cuid()} eventInfo={e} />
      ))}
    </ListStyled.List>
  );
};
