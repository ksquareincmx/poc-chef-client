import React, { useState, useContext, useEffect } from "react";
import { Header } from "src/partner/modules/Header";
import { EventListContainer } from "src/partner/modules/EventList";
import { EventService } from "src/partner/services";
import { IEvent } from "src/partner/models/Event";
import { dateComparator } from "src/partner/utils/EventListUtils";
import { NotificationContext } from "src/providers";
import reducer, {
  initialState,
  startFetching,
  fetchingSucess,
  fetchingError,
  editEvent
} from "src/partner/ducks/pastEvent";

export const PastEventsView: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const notificationContext = useContext(NotificationContext.NotificationContext);

  const fetchEvents = async () => {
    dispatch(startFetching());
    try {
      const events = await EventService.eventService.getPastEvents();
      events.sort(dateComparator);
      dispatch(fetchingSucess(events));
    } catch (err) {
      dispatch(fetchingError(err));
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEditEvent = (event: IEvent) => {
    dispatch(editEvent(event));
  };

  const handleCancelEvent = () => {
    notificationContext.handleShowNotification("You cannot cancel a past event.");
  };

  if (state.isLoading) {
    return (
      <React.Fragment>
        <Header title="Past Events" />
        <p>is loading</p>
      </React.Fragment>
    );
  }

  if (state.error) {
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
        events={state.events}
        onEdit={handleEditEvent}
      />
    </React.Fragment>
  );
};
