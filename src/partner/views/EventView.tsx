import React from "react";
import { EventListItem } from "../modules/EventList/EventListItem";
import { Header } from "../modules/Header";
import { EventService } from "../services";
import { IEvent, InitialEvent } from "../models/Event";

interface IEventViewProps {
  match: { params: { id: string } };
}

interface ICurrentEventsViewState {
  isLoading: boolean;
  error?: Error;
  localEvent: IEvent;
}

export class EventView extends React.Component<
  IEventViewProps,
  ICurrentEventsViewState
> {
  public state = {
    isLoading: false,
    error: undefined,
    localEvent: InitialEvent()
  };

  public async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const events = await EventService.eventService.getCurrentEvents();
      const localEvent =
        events.filter(e => e.id == this.props.match.params.id)[0] ||
        InitialEvent();
      this.setState({ isLoading: false, localEvent });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err
      });
    }
  }

  public render() {
    if (this.state.isLoading || this.state.error) {
      return (
        <React.Fragment>
          <Header title="Event view" />
          <p>loading</p>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Header title="Event view" />
        {(this.state.localEvent.id !== "" && (
          <EventListItem
            key={this.state.localEvent.id}
            eventInfo={this.state.localEvent}
            eventView={true}
          />
        )) || <p>Selected event doesn't exist</p>}
      </React.Fragment>
    );
  }
}
