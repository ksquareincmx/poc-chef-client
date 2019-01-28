import React from "react";
import EventList from "./EventList";
import { IEvent } from "../../interfaces/Event";

interface IEventListContainerProps {
  events: IEvent[];
}
const EventListContainer = (props: IEventListContainerProps) => {
  return <EventList events={props.events} />;
};

export default EventListContainer;
