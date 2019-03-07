import React, { useState, useContext, useEffect } from "react";
import { Header } from "src/partner/modules/Header";
import { EventListContainer } from "src/partner/modules/EventList";
import { EventService } from "src/partner/services";
import { IEvent } from "src/partner/models/Event";
import { dateComparator } from "src/partner/utils/EventListUtils";
import { NotificationContext } from "src/providers";

export const PastEventsView: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const notificationContext = useContext(NotificationContext.NotificationContext);

  const fetchEvents = async () => {
    setIsLoading(true);
    setError(undefined);
    setEvents([]);
    try {
      const events = await EventService.eventService.getPastEvents();
      events.sort(dateComparator);
      setEvents(events);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEditEvent = (event: IEvent) => {
    const newEvents = events.map(ev => {
      if (ev["id"] === event["id"]) {
        return event;
      }
      return ev;
    });
    setEvents(newEvents);
  };

  const handleCancelEvent = (eventId: string) => {
    notificationContext.handleShowNotification("You cannot cancel a past event.");
  };

  if (isLoading) {
    return (
      <React.Fragment>
        <Header title="Past Events" />
        <p>is loading</p>
      </React.Fragment>
    );
  }

  if (error) {
    return (
      <React.Fragment>
        <Header title="Past Events" />
        <p>is loading</p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header title="Past Events" />
      <EventListContainer
        handleCancelEvent={handleCancelEvent}
        events={events}
        onEdit={handleEditEvent}
      />
    </React.Fragment>
  );
};
