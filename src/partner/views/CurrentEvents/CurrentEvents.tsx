import React, { useContext, useEffect } from "react";
import { Header } from "src/partner/modules/Header";
import { EventListContainer } from "src/partner/modules/EventList";
import { EventService } from "src/partner/services";
import { IEvent } from "src/partner/models/Event";
import { dateComparator } from "src/partner/utils/EventListUtils";
import { NotificationContext } from "src/providers";
import { Button } from "src/components/FloatingAddButton/FloatingAddButton";
import { CreateEvent } from "src/components/event/Create";
import { ListStyled, ContentWrapper } from "src/partner/modules/ui";
import {
  reducer,
  initialState,
  cancelEvent,
  closeModal,
  createEvent,
  updateEvent,
  showModal,
  showEditModal,
  showModalCancelEvent,
  startFetching,
  fetchingSucess,
  fetchingError,
  closeModalCancelEvent,
} from "../../ducks/currentEvent";
import { EmptyEvents } from "src/partner/modules/EmptyEvents/EmptyEvents";

export const CurrentEvents: React.FC<{}> = () => {
  const notificationContext = useContext(NotificationContext.NotificationContext);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleCloseModalCancelEvent = () => {
    dispatch(closeModalCancelEvent());
  };

  const handleCancelEvent = () => {
    dispatch(cancelEvent());
    notificationContext.handleShowNotification("The event has been cancelled.");
  };

  const handleCreateEvent = (event: IEvent) => {
    dispatch(createEvent(event));
  };

  const handleUpdateEvent = (event: IEvent) => {
    dispatch(updateEvent(event));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleShowModal = () => {
    dispatch(showModal());
  };

  const handleShowEditModal = (currentEvent: IEvent) => {
    dispatch(showEditModal(currentEvent));
  };

  const handleShowModalCancelEvent = (currentEvent: IEvent) => {
    dispatch(showModalCancelEvent(currentEvent));
  };

  const fetchEvents = async () => {
    dispatch(startFetching());
    try {
      const events = await EventService.eventService.getCurrentEvents();
      events.sort(dateComparator);
      dispatch(fetchingSucess(events));
    } catch (err) {
      dispatch(fetchingError(err));
    }
  };

  useEffect(() => {
    //fetchEvents();
  }, []);

  return (
    <>
      <Header title="Current Events" />
      <ContentWrapper>
        {(state.isLoading || state.error) && <p>is loading</p>}
        {state.events.length === 0 && <EmptyEvents />}
        {/*<EventListContainer
          handleCancelEvent={handleCancelEvent}
          events={state.events}
          onEdit={handleUpdateEvent}
          modalController={modalController}
        />*/}
      </ContentWrapper>
    </>
  );
};
