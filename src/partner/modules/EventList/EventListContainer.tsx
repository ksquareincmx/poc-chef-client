import React from "react";
import eventService from "../../services/EventService";
import { IEvent } from "../../interfaces/Event";
import EventList from "./EventList";

interface IEventListContainerState {
  events: IEvent[];
  isLoading: boolean;
  error?: Error;
}

class EventListContainer extends React.Component<{}, IEventListContainerState> {
  state = {
    events: [],
    isLoading: false,
    error: undefined
  };

  CompDateEvent = (a: IEvent, b: IEvent) => {
    return a.startDate > b.startDate ? -1 : a.startDate < b.startDate ? 1 : 0;
  };

  public async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const events = await eventService.getAll();
      events.sort(this.CompDateEvent);
      this.setState({ events, isLoading: false });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err
      });
    }
  }

  public render() {
    if (this.state.isLoading) {
      return <p>is loading</p>;
    }
    if (this.state.error) {
      return <p>There is a error</p>;
    }
    return <EventList events={this.state.events} />;
  }
}

export default EventListContainer;
