import React from "react";
import { IEvent } from "src/partner/models/Event";
import { EventList } from "./EventList";

export interface IEventListContainerProps {
  events: IEvent[];
  handleCancelEvent: (e: any) => void;
  onEdit: (event: any) => void;
}

export const EventListContainer: React.SFC<IEventListContainerProps> = props => {
  return <EventList {...props} />;
};
