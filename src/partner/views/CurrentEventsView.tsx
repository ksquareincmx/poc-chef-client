import React from "react";
import { Header } from "src/partner/modules/Header";
import { EventListContainer } from "src/partner/modules/EventList";
import { EventService } from "src/partner/services";
import { IEvent } from "src/partner/models/Event";
import { dateComparator } from "src/partner/utils/EventListUtils";
import { NotificationContext } from "src/providers";

export interface ICurrentEventsViewState {
  events: IEvent[];
  isLoading: boolean;
  error?: Error;
}

export class CurrentEventsView extends React.Component<{}, ICurrentEventsViewState> {
  state = {
    events: [],
    isLoading: false,
    error: undefined,
  };

  handleCreateEvent = (event: IEvent) => {};
  handleEditEvent = (event: IEvent) => {
    const newEvents = this.state.events.map(ev => {
      if (ev["id"] === event["id"]) {
        return event;
      }
      return ev;
    });
    this.setState({ events: newEvents });
  };

  static contextType = NotificationContext.NotificationContext;

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

  handleCancelEvent = (eventId: string) => {
    const events = this.state.events.filter((e: IEvent) => e.id != eventId);
    this.setState({ events });
    this.context.handleShowNotification("The event has been cancelled.");
  };

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
    return (
      <React.Fragment>
        <Header title="Current Events" />
        <EventListContainer
          handleCancelEvent={this.handleCancelEvent}
          events={this.state.events}
          onEdit={this.handleEditEvent}
        />
      </React.Fragment>
    );
  }
}
