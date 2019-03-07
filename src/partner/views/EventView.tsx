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

export const EventView: React.FC<IEventViewProps> = props => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [localEvent, setLocalEvent] = React.useState<IEvent>(event());
  const [error, setError] = React.useState(undefined);
  const [showModal, setShowModal] = React.useState(false);
  const context = React.useContext(NotificationContext.NotificationContext);

  const handleEditEvent = () => {};

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const events = await EventService.eventService.getCurrentEvents();
      const localEvent = events.filter(e => e.id == props.match.params.id)[0] || event();
      setIsLoading(false);
      setLocalEvent(localEvent);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };
  React.useEffect(() => {
    fetchEvents();
  }, []);

  const handleFinishEvent = () => {
    // TODO: Finish event on the server
    context.handleShowNotification("Event Finished");
    closeModalFinishEvent();
  };

  const showModalFinishEvent = () => {
    setShowModal(true);
  };

  const closeModalFinishEvent = () => {
    setShowModal(false);
  };

  if (isLoading || error) {
    return (
      <React.Fragment>
        <Header title="Event view" />
        <p>loading</p>
      </React.Fragment>
    );
  }

  if (localEvent.id == "") {
    return <>Selected event doesn't exist</>;
  }

  return (
    <React.Fragment>
      <Header title={localEvent.orderNumber} />
      <List>
        <EventListItem
          handleCancelEvent={() => {}}
          key={localEvent.id}
          eventInfo={localEvent}
          eventView={true}
          onEdit={handleEditEvent}
        />
      </List>
      <FloatingFinishDiv>
        <ListStyled.GradientButton onClick={showModalFinishEvent}>
          Finish Event
        </ListStyled.GradientButton>
      </FloatingFinishDiv>
      <Modal show={showModal} title="Finish Event" closeModal={closeModalFinishEvent}>
        <div>Are you sure you want to finish this event?</div>
        <CenteredDiv>
          <ListStyled.GradientButton onClick={handleFinishEvent}>Confirm</ListStyled.GradientButton>
        </CenteredDiv>
      </Modal>
    </React.Fragment>
  );
};
