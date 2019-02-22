import React from "react";
import { EventListItem } from "src/partner/modules/EventList/EventListItem";
import { Header } from "src/partner/modules/Header";
import { EventService } from "src/partner/services";
import { IEvent, InitialEvent } from "src/partner/models/Event";
import { List } from "src/partner/modules/ui/List/List";
import { ListStyled, Modal, Notification } from "src/partner/modules/ui";

export interface IEventViewProps {
  match: { params: { id: string } };
}

export interface ICurrentEventsViewState {
  isLoading: boolean;
  error?: Error;
  localEvent: IEvent;
  showModalFinishEvent: boolean;
  showNotification: boolean;
  notificationText: string;
}

export class EventView extends React.Component<
  IEventViewProps,
  ICurrentEventsViewState
> {
  public state = {
    isLoading: false,
    error: undefined,
    localEvent: InitialEvent(),
    showModalFinishEvent: false,
    showNotification: false,
    notificationText: ""
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

  handleFinishEvent = () => {
    // TODO: Finish event on the server
    this.setState({
      showNotification: true,
      notificationText: "Event Finished"
    });
    this.closeModalFinishEvent();
  };

  showModalFinishEvent = () => {
    this.setState({ showModalFinishEvent: true });
  };

  closeModalFinishEvent = () => {
    this.setState({ showModalFinishEvent: false });
  };

  closeNotification = () => {
    this.setState({ showNotification: false });
    this.resetNotificationText();
  };

  resetNotificationText = () => {
    this.setState({ notificationText: "" });
  };

  public render() {
    if (this.state.isLoading || this.state.error) {
      return (
        <React.Fragment>
          <Header title="Event view" />
          <p>loading</p>
        </React.Fragment>
      );
    }

    if (this.state.localEvent.id == "") {
      return <>Selected event doesn't exist</>;
    }

    return (
      <React.Fragment>
        <Header title="Event view" />
        <List>
          <EventListItem
            key={this.state.localEvent.id}
            eventInfo={this.state.localEvent}
            eventView={true}
          />
        </List>
        <ListStyled.RowData>
          <ListStyled.GradientButton onClick={this.showModalFinishEvent}>
            Finish Event
          </ListStyled.GradientButton>
        </ListStyled.RowData>
        <Modal.Modal
          show={this.state.showModalFinishEvent}
          title="Finish Event"
          closeModal={this.closeModalFinishEvent}
        >
          <div>Are you sure you want to finish this event?</div>
          <ListStyled.RowData>
            <ListStyled.GradientButton onClick={this.handleFinishEvent}>
              Confirm
            </ListStyled.GradientButton>
          </ListStyled.RowData>
        </Modal.Modal>
        {this.state.showNotification && (
          <Notification.Notification
            close={this.closeNotification}
            text={this.state.notificationText}
          />
        )}
      </React.Fragment>
    );
  }
}
