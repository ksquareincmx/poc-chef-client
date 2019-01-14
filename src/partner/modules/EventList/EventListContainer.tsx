import React from "react";
import eventService from "../../services/EventService";
import { IEvent } from "../../interfaces/Event";
import EventList from "./EventList";

interface IEventListContainerState {
  events: IEvent[];
  isLoading: boolean;
}

class EventListContainer extends React.Component<{}, IEventListContainerState> {
  state = {
    events: [],
    isLoading: false
  };

  public componentDidMount() {
    this.setState({ isLoading: true });
    eventService.getAll().then(events => {
      events.sort(function(a, b) {
        return a.startDate > b.startDate
          ? -1
          : a.startDate < b.startDate
          ? 1
          : 0;
      });
      this.setState({ events, isLoading: false });
    });
  }

  public render() {
    if (this.state.isLoading) {
      return <p>is loading</p>;
    }
    return <EventList events={this.state.events} />;
  }
}

export default EventListContainer;
