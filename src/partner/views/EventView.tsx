import React, { useReducer } from "react";
import { EventListItem } from "src/partner/modules/EventList/EventListItem";
import { Header } from "src/partner/modules/Header";
import { List } from "src/partner/modules/ui/List/List";
import { ListStyled } from "src/partner/modules/ui";
import { Modal } from "src/partner/modules/ui/Modal/Modal";
import { NotificationContext } from "src/providers";
import styledComponents from "styled-components";
import reducer, { initialState, fetchEvent } from "../ducks/event";
import { NavBar } from "../modules/NavBar";

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

export interface ICurrentEventsViewState {
  showModalFinishEvent: boolean;
}

export interface IEventViewProps {
  match: { params: { id: string } };
}

export const EventView: React.FC<IEventViewProps> = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showModal, setShowModal] = React.useState(false);
  const context = React.useContext(NotificationContext.NotificationContext);

  React.useEffect(() => {
    fetchEvent(props.match.params.id, dispatch);
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

  const handleEditEvent = () => {};

  if (state.isLoading || state.error) {
    return (
      <React.Fragment>
        <Header title="Event view" />
        <p>loading</p>
      </React.Fragment>
    );
  }

  if (state.localEvent.id == "") {
    return <>Selected event doesn't exist</>;
  }

  return (
    <React.Fragment>
      <Header title={state.localEvent.orderNumber} />
      <List>
        <EventListItem
          handleCancelEvent={() => {}}
          key={state.localEvent.id}
          eventInfo={state.localEvent}
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
      <NavBar />
    </React.Fragment>
  );
};
