import React from "react";
import { IEvent } from "src/partner/models/Event";
import { ListStyled } from "src/partner/modules/ui/";
import { EmptyEvents } from "../EmptyEvents";
import { CardEvent } from "../CardEvent";

export interface IEventListProps {
  events: IEvent[];
  handleCancelEvent: (e: any) => void;
  onEdit: (event: any) => void;
  modalController?: any;
}

export const EventList: React.SFC<IEventListProps> = props => {
  if (props.events.length === 0) {
    return <EmptyEvents />;
  }

  return (
    <ListStyled.List>
      {props.events.map(e => (
        <CardEvent key={e.id} eventInfo={e} />
      ))}
    </ListStyled.List>
  );
};
