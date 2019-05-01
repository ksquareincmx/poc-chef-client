import React, { useState } from "react";
import { event } from "src/partner/models/Event";
import { EmptyEvents } from "../EmptyEvents";
import { EventList } from "./EventList";
import { IEvent } from "src/partner/models";

export const EventsContainer: React.FC = () => {
  const events: IEvent.IEvent[] = [event(), event()];
  return events.length > 0 ? <EventList events={events} /> : <EmptyEvents />;
};
