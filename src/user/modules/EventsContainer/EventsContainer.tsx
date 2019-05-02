import React, { useState, useContext, useEffect } from "react";
import { event } from "src/partner/models/Event";
import { EmptyEvents } from "../EmptyEvents";
import { EventList } from "./EventList";
import { IUserEvent } from "src/user/models/UserEvent";
import { UserEventService } from "src/user/services/UserEventService";
import { NotificationContext } from "src/providers";

export const EventsContainer: React.FC = () => {
  const [state, setState] = useState<IUserEvent[]>([]);
  const notificationContext = useContext(NotificationContext.NotificationContext);
  const fetchEvents = async () => {
    try {
      const events = await UserEventService.getUserEvents();
      setState(events);
    } catch (err) {
      notificationContext.handleShowNotification(err.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return state.length > 0 ? <EventList events={state} /> : <EmptyEvents />;
};
