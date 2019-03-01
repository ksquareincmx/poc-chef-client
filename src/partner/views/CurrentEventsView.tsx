import React from "react";
import { Header } from "src/partner/modules/Header";
import { EventListContainer } from "src/partner/modules/EventList";
import { EventService } from "src/partner/services";
import { IEvent, Event } from "src/partner/models/Event";
import { dateComparator } from "src/partner/utils/EventListUtils";
import { NotificationContext } from "src/providers";
import { FloatingAddButton } from "src/components/FloatingAddButton/FloatingAddButton";
import { Modal } from "src/partner/modules/ui/Modal";
import { CreateEvent } from "src/components/event/Create";
import { ListStyled } from "src/partner/modules/ui";

export interface ICurrentEventsViewState {
  events: IEvent[];
  isLoading: boolean;
  error?: Error;
  editEvent: boolean;
  cancelEvent: boolean;
  openModal: boolean;
  currentEvent: IEvent;
}

export class CurrentEventsView extends React.Component<{}, ICurrentEventsViewState> {
  state = {
    events: [],
    isLoading: false,
    error: undefined,
    editEvent: false,
    cancelEvent: false,
    currentEvent: Event(),
    openModal: false,
  };
  static contextType = NotificationContext.NotificationContext;

  closeModalCancelEvent = () => {
    this.setState({ cancelEvent: false, currentEvent: Event() });
  };

  handleCancelEvent = () => {
    const events = this.state.events.filter((e: IEvent) => e.id != this.state.currentEvent.id);
    this.setState({ events, currentEvent: Event(), cancelEvent: false });
    this.context.handleShowNotification("The event has been cancelled.");
  };

  handleCreateEvent = (event: IEvent) => {
    const newEvents: IEvent[] = [...this.state.events];
    event.orderNumber = "Event: #" + (newEvents.length + 1);
    newEvents.push(event);
    this.setState({ events: newEvents, openModal: false });
  };

  handleUpdateEvent = (event: IEvent) => {
    const newEvents = this.state.events.map((ev: IEvent) => {
      if (ev.id === event.id) {
        return event;
      }
      return ev;
    });
    this.setState({ events: newEvents, currentEvent: Event(), editEvent: false });
  };

  closeModal = () => {
    this.setState({ openModal: false, currentEvent: Event() });
  };

  showModal = () => {
    this.setState({ openModal: true });
  };

  showEditModal = (currentEvent: IEvent) => {
    this.setState({ currentEvent, editEvent: true, openModal: true });
  };

  showModalCancelEvent = (currentEvent: IEvent) => {
    this.setState({ cancelEvent: true, currentEvent });
  };

  public async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const events = await EventService.eventService.getCurrentEvents();
      events.sort(dateComparator);
      this.setState({ events, isLoading: false });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err,
      });
    }
  }

  public render() {
    if (this.state.isLoading) {
      return (
        <React.Fragment>
          <Header title="Current Events" />
          <p>is loading</p>
        </React.Fragment>
      );
    }

    if (this.state.error) {
      return (
        <React.Fragment>
          <Header title="Current Events" />
          <p>is loading</p>
        </React.Fragment>
      );
    }

    const modalController = {
      closeModal: this.closeModal,
      showModal: this.showModal,
      showModalCancelEvent: this.showModalCancelEvent,
      showEditModal: this.showEditModal,
    };

    return (
      <React.Fragment>
        <Header title="Current Events" />
        <EventListContainer
          handleCancelEvent={this.handleCancelEvent}
          events={this.state.events}
          onEdit={this.handleUpdateEvent}
          modalController={modalController}
        />
        <Modal title="Edit Event" show={this.state.openModal} closeModal={this.closeModal}>
          <CreateEvent
            editEvent={this.state.editEvent}
            onCreate={this.handleCreateEvent}
            onEdit={this.handleUpdateEvent}
            closeModal={this.closeModal}
            eventInfo={this.state.currentEvent}
          />
        </Modal>

        <Modal
          title="Cancel Event"
          show={this.state.cancelEvent}
          closeModal={this.closeModalCancelEvent}
        >
          <ListStyled.H2>Are you sure you want to cancel this event?</ListStyled.H2>
          <ListStyled.RowData>
            <ListStyled.GradientButton onClick={this.handleCancelEvent}>
              Confirm
            </ListStyled.GradientButton>
          </ListStyled.RowData>
        </Modal>

        <FloatingAddButton onClick={this.showModal} />
      </React.Fragment>
    );
  }
}
