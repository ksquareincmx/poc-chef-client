import React from "react";
import Header from "../modules/Header";
import EventListContainer from "../modules/EventList";
import eventService from "../services/EventService";
import { IEvent } from "../interfaces/Event";
import { dateComparator } from "../utils/EventListUtils";

interface IPastEventsViewState {
  events: IEvent[];
  isLoading: boolean;
  error?: Error;
}

class PastEventsView extends React.Component<{}, IPastEventsViewState> {
  state = {
    events: [],
    isLoading: false,
    error: undefined
  };

  public async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const events = await eventService.getPastEvents();
      events.sort(dateComparator);
      this.setState({ events, isLoading: false });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err
      });
    }
  }

  public render() {
    return (
      <React.Fragment>
        <Header title="Past Events" />
        {this.state.isLoading ? (
          <p>is loading</p>
        ) : this.state.error ? (
          <p>An error has occurred</p>
        ) : (
          <EventListContainer events={this.state.events} />
        )}
      </React.Fragment>
    );
  }
}

export default PastEventsView;
