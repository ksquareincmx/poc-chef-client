import React, { Fragment, useState, useContext, useEffect, useReducer } from "react";
import styledComponents from "styled-components";
import { NotificationContext } from "src/providers";
import reducer, { initialState, fetchEvent } from "../ducks/event";
import { NavBar } from "../modules/NavBar";
import { EventListItem } from "src/partner/modules/EventList/EventListItem";
import { Header } from "src/partner/modules/Header";
import { List } from "src/partner/modules/ui/List/List";
import { ListStyled } from "src/partner/modules/ui";
import { Modal } from "src/partner/modules/ui/Modal/Modal";

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
  const [showModal, setShowModal] = useState(false);
  const context = useContext(NotificationContext.NotificationContext);

  useEffect(() => {
    fetchEvent(props.match.params.id, dispatch);
  }, []);

  const showModalFinishEvent = () => {
    setShowModal(true);
  };

  const closeModalFinishEvent = () => {
    setShowModal(false);
  };

  const handleFinishEvent = () => {
    // TODO: Finish event on the server
    context.handleShowNotification("Event Finished");
    closeModalFinishEvent();
  };

  const handleEditEvent = () => {};

  if (state.isLoading || state.error) {
    return (
      <Fragment>
        <Header title="Event view" />
        <p>loading</p>
      </Fragment>
    );
  }

  if (state.localEvent.id == "") {
    return <>Selected event doesn't exist</>;
  }

  return (
    <Fragment>
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
    </Fragment>
  );
};
