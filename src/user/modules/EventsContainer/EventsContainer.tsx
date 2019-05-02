import React, { useState } from "react";
import { event } from "src/partner/models/Event";
import { EmptyEvents } from "../EmptyEvents";
import { EventList } from "./EventList";
import { IUserEvent } from "src/user/models/UserEvent";

export const EventsContainer: React.FC = () => {
  //temporal data
  const products = {
    "8a8a8aa": {
      id: "8a8a8aa",
      name: "Torta de poc-chuc",
      quantity: 0,
      price: 22,
      subtotal: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    "5a6a6a6": {
      id: "5a6a6a6",
      name: "Torta de poc-chuc",
      quantity: 0,
      price: 22,
      subtotal: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    "5a5a5a666": {
      id: "5a5a5a666",
      name: "Torta de poc-chuc",
      quantity: 0,
      price: 22,
      subtotal: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  };
  const events: IUserEvent[] = [
    { ...event(), name: "Event 1", id: "8888", products: { ...products } },
    { ...event(), name: "Event 2", id: "8a88a8", products: { ...products } },
  ];

  const [state, setState] = useState<IUserEvent[]>(events);

  return events.length > 0 ? <EventList events={state} /> : <EmptyEvents />;
};
