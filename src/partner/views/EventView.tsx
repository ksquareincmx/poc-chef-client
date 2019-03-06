import React from "react";
import { EventListItem } from "src/partner/modules/EventList/EventListItem";
import { Header } from "src/partner/modules/Header";
import { EventService } from "src/partner/services";
import { IEvent, event } from "src/partner/models/Event";
import { List } from "src/partner/modules/ui/List/List";
import { ListStyled } from "src/partner/modules/ui";
import { Modal } from "src/partner/modules/ui/Modal/Modal";
import { NotificationContext } from "src/providers";
import styledComponents from "styled-components";

export interface IEventViewProps {
  match: { params: { id: string } };
}

export interface ICurrentEventsViewState {
  isLoading: boolean;
  error?: Error;
  localEvent: IEvent;
  showModalFinishEvent: boolean;
}

const FloatingFinishDiv = styledComponents.div`
  position: fixed;
  bottom: 60px;
  width: 100%;
  text-align: center;
`;

const CenteredDiv = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export class EventView extends React.Component<IEventViewProps, ICurrentEventsViewState> {
  public state = {
    isLoading: false,
    error: undefined,
    localEvent: event(),
    showModalFinishEvent: false
  };
  static contextType = NotificationContext.NotificationContext;

  handleEditEvent = () => {};

  public async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const events = await EventService.eventService.getCurrentEvents();
      const localEvent = events.filter(e => e.id == this.props.match.params.id)[0] || event();
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
    this.context.handleShowNotification("Event Finished");
    this.closeModalFinishEvent();
  };

  showModalFinishEvent = () => {
    this.setState({ showModalFinishEvent: true });
  };

  closeModalFinishEvent = () => {
    this.setState({ showModalFinishEvent: false });
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
        <Header title={this.state.localEvent.orderNumber} />
        <List>
          <EventListItem
            handleCancelEvent={() => {}}
            key={this.state.localEvent.id}
            eventInfo={this.state.localEvent}
            eventView={true}
            onEdit={this.handleEditEvent}
          />
        </List>
        <FloatingFinishDiv>
          <ListStyled.GradientButton onClick={this.showModalFinishEvent}>
            Finish Event
          </ListStyled.GradientButton>
        </FloatingFinishDiv>
        <Modal
          show={this.state.showModalFinishEvent}
          title="Finish Event"
          closeModal={this.closeModalFinishEvent}
        >
          <div>Are you sure you want to finish this event?</div>
          <CenteredDiv>
            <ListStyled.GradientButton onClick={this.handleFinishEvent}>
              Confirm
            </ListStyled.GradientButton>
          </CenteredDiv>
        </Modal>
      </React.Fragment>
    );
  }
}
