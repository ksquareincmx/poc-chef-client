import React, { useContext, useState, useEffect } from "react";
import { Header } from "src/partner/modules/Header";
import { EventListContainer } from "src/partner/modules/EventList";
import { EventService } from "src/partner/services";
import { IEvent, event } from "src/partner/models/Event";
import { dateComparator } from "src/partner/utils/EventListUtils";
import { NotificationContext } from "src/providers";
import { Button } from "src/components/FloatingAddButton/FloatingAddButton";
import { Modal } from "src/partner/modules/ui/Modal/Modal";
import { CreateEvent } from "src/components/event/Create";
import { ListStyled } from "src/partner/modules/ui";
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
} from "../ducks/CurrentEventViewReducer";

export const CurrentEventsView: React.FC<{}> = () => {
  const notificationContext = useContext(NotificationContext.NotificationContext);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleCloseModalCancelEvent = () => {
    dispatch(closeModalCancelEvent());
  };

  const handleCancelEvent = () => {
    dispatch(cancelEvent(state.events, state.currentEvent));
    notificationContext.handleShowNotification("The event has been cancelled.");
  };

  const handleCreateEvent = (event: IEvent) => {
    dispatch(createEvent(state.events, event));
  };

  const handleUpdateEvent = (event: IEvent) => {
    dispatch(updateEvent(state.events, event));
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
    fetchEvents();
  }, []);

  if (state.isLoading) {
    return (
      <React.Fragment>
        <Header title="Current Events" />
        <p>is loading</p>
      </React.Fragment>
    );
  }

  if (state.error) {
    return (
      <React.Fragment>
        <Header title="Current Events" />
        <p>is loading</p>
      </React.Fragment>
    );
  }

  const modalController = {
    handleCloseModal: handleCloseModal,
    showModal: handleShowModal,
    showModalCancelEvent: handleShowModalCancelEvent,
    showEditModal: handleShowEditModal,
  };

  return (
    <React.Fragment>
      <Header title="Current Events" />
      <EventListContainer
        handleCancelEvent={handleCancelEvent}
        events={state.events}
        onEdit={handleUpdateEvent}
        modalController={modalController}
      />
      <Modal title="Edit Event" show={state.openModal} closeModal={handleCloseModal}>
        <CreateEvent
          editEvent={state.editEvent}
          onCreate={handleCreateEvent}
          onEdit={handleUpdateEvent}
          closeModal={handleCloseModal}
          eventInfo={state.currentEvent}
        />
      </Modal>

      <Modal title="Cancel Event" show={state.cancelEvent} closeModal={handleCloseModalCancelEvent}>
        <ListStyled.ModalText>Are you sure you want to cancel this event?</ListStyled.ModalText>
        <ListStyled.RowData>
          <ListStyled.GradientButton onClick={handleCancelEvent}>Confirm</ListStyled.GradientButton>
        </ListStyled.RowData>
      </Modal>

      <Button onClick={handleShowModal} />
    </React.Fragment>
  );
};
