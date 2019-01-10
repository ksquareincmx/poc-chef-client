import React from "react";
import { IEvent } from "../../interfaces/Event";
import EventListItem from "./EventListItem";

interface IEventListProps {
  events: IEvent[];
}

const styles = {
  eventsContainer: {
    marginTop: "-25px",
    padding: "0 15px 0 15px",
    height: "100%"
  }
};

const EventList: React.SFC<IEventListProps> = props => {
  if (props.events.length === 0) {
    return <p>there are not events to show</p>;
  }

  return (
    <div className="events-container" style={styles.eventsContainer}>
      {props.events.map(e => (
        <EventListItem eventInfo={e} />
      ))}
    </div>
  );
};

export default EventList;
