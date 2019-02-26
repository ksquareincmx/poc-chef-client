import React from "react";
import { IEvent } from "src/partner/models/Event";
import { EventList } from "./EventList";

export interface IEventListContainerProps {
  events: IEvent[];
  onEdit: Function;
}

export const EventListContainer: React.SFC<IEventListContainerProps> = props => {
  return <EventList events={props.events} onEdit={props.onEdit} />;
};
