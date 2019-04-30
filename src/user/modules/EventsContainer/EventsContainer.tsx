import React, { useState } from "react";
import { event } from "src/partner/models/Event";
import { EmptyEvents } from "../EmptyEvents";

export const EventsContainer: React.FC = () => {
  const Events = [];
  return Events.length > 0 ? <>Event list</> : <EmptyEvents />;
};
