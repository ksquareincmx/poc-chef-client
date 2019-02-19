import React from "react";
import EventListItem from "src/partner/modules/EventList/EventListItem";
import Header from "src/partner/modules/Header";
import eventService from "src/partner/services/EventService";
import { IEvent, InitialEvent } from "src/partner/interfaces/Event";

interface IEventViewProps {
  match: { params: { id: string } };
}

interface ICurrentEventsViewState {
  isLoading: boolean;
  error?: Error;
  localEvent: IEvent;
}

class EventView extends React.Component<IEventViewProps, ICurrentEventsViewState> {
  public state = {
    isLoading: false,
    error: undefined,
    localEvent: InitialEvent(),
  };

  public async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const events = await eventService.getCurrentEvents();
      const localEvent =
        events.filter(e => e.id == this.props.match.params.id)[0] || InitialEvent();
      this.setState({ isLoading: false, localEvent });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err,
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

export default EventView;
