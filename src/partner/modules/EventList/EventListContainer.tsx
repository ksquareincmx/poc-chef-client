import React from "react";
import { EventList } from "./EventList";
import { IEvent } from "../../models/Event";

interface IEventListContainerProps {
  events: IEvent[];
}

export const EventListContainer: React.SFC<
  IEventListContainerProps
> = props => {
  return <EventList events={props.events} />;
};
