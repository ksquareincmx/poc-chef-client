import React from "react";
import styled from "@emotion/styled";
import { IEvent } from "../../interfaces/Event";
import EventListItem from "./EventListItem";

interface IEventListProps {
  events: IEvent[];
}

const EventsContainer = styled.div({
  marginTop: "-25px",
  padding: "0 15px 0 15px",
  height: "100%",
  overflowY: "auto"
});

const EventList: React.SFC<IEventListProps> = props => {
  if (props.events.length === 0) {
    return <p>there are not events to show</p>;
  }

  return (
    <EventsContainer>
      {props.events.map(e => (
        <EventListItem key={e.id} eventInfo={e} />
      ))}
    </EventsContainer>
  );
};

export default EventList;
