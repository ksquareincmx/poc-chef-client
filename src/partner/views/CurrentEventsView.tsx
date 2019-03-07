import React, { useContext, useState, useEffect } from "react";
import { Header } from "src/partner/modules/Header";
import { EventListContainer } from "src/partner/modules/EventList";
import { EventService } from "src/partner/services";
import { IEvent, event } from "src/partner/models/Event";
import { dateComparator } from "src/partner/utils/EventListUtils";
import { NotificationContext } from "src/providers";
import { FloatingAddButton } from "src/components/FloatingAddButton/FloatingAddButton";
import { Modal } from "src/partner/modules/ui/Modal/Modal";
import { CreateEvent } from "src/components/event/Create";
import { ListStyled } from "src/partner/modules/ui";

export const CurrentEventsView: React.FC<{}> = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentEvent, setCurrentEvent] = useState<IEvent>(event());
  const [cancelEvent, setCancelEvent] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [editEvent, setEditEvent] = useState(false);
  const notificationContext = useContext(NotificationContext.NotificationContext);

  const closeModalCancelEvent = () => {
    setCancelEvent(false);
    setCurrentEvent(event());
  };

  const handleCancelEvent = () => {
    const newEvents = events.filter((e: IEvent) => e.id != currentEvent.id);
    setEvents(newEvents);
    setCurrentEvent(event());
    setCancelEvent(false);
    notificationContext.handleShowNotification("The event has been cancelled.");
  };

  const handleCreateEvent = (event: IEvent) => {
    const newEvents: IEvent[] = [...events];
    event.orderNumber = "Event: #" + (newEvents.length + 1);
    newEvents.push(event);
    setEvents(newEvents);
    setOpenModal(false);
  };

  const handleUpdateEvent = (updatedEvent: IEvent) => {
    const newEvents = events.map((ev: IEvent) => {
      if (ev.id === updatedEvent.id) {
        return updatedEvent;
      }
      return ev;
    });
    setEvents(newEvents);
    setCurrentEvent(event());
    setEditEvent(false);
  };

  const closeModal = () => {
    setOpenModal(false);
    setCurrentEvent(event());
  };

  const showModal = () => {
    setOpenModal(true);
  };

  const showEditModal = (currentEvent: IEvent) => {
    setCurrentEvent(currentEvent);
    setEditEvent(true);
    setOpenModal(true);
  };

  const showModalCancelEvent = (currentEvent: IEvent) => {
    setCancelEvent(true);
    setCurrentEvent(currentEvent);
  };

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const events = await EventService.eventService.getCurrentEvents();
      events.sort(dateComparator);
      setEvents(events);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <React.Fragment>
        <Header title="Current Events" />
        <p>is loading</p>
      </React.Fragment>
    );
  }

  if (error) {
    return (
      <React.Fragment>
        <Header title="Current Events" />
        <p>is loading</p>
      </React.Fragment>
    );
  }

  const modalController = {
    closeModal: closeModal,
    showModal: showModal,
    showModalCancelEvent: showModalCancelEvent,
    showEditModal: showEditModal
  };

  return (
    <React.Fragment>
      <Header title="Current Events" />
      <EventListContainer
        handleCancelEvent={handleCancelEvent}
        events={events}
        onEdit={handleUpdateEvent}
        modalController={modalController}
      />
      <Modal title="Edit Event" show={openModal} closeModal={closeModal}>
        <CreateEvent
          editEvent={editEvent}
          onCreate={handleCreateEvent}
          onEdit={handleUpdateEvent}
          closeModal={closeModal}
          eventInfo={currentEvent}
        />
      </Modal>

      <Modal title="Cancel Event" show={cancelEvent} closeModal={closeModalCancelEvent}>
        <ListStyled.H2>Are you sure you want to cancel this event?</ListStyled.H2>
        <ListStyled.RowData>
          <ListStyled.GradientButton onClick={handleCancelEvent}>Confirm</ListStyled.GradientButton>
        </ListStyled.RowData>
      </Modal>

      <FloatingAddButton onClick={showModal} />
    </React.Fragment>
  );
};
