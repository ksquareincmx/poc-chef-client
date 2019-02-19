import React from "react";
import { IEvent } from "src/partner/models/Event";
import { EventList } from "./EventList";

interface IEventListContainerProps {
  events: IEvent[];
}

export const EventListContainer: React.SFC<IEventListContainerProps> = props => {
  return <EventList events={props.events} />;
};
