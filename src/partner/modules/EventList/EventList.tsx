import React from "react";
import { IEvent } from "../../interfaces/Event";

interface IEventListProps {
  events: IEvent[];
}

const EventList: React.SFC<IEventListProps> = props => {
  if (props.events.length === 0) {
    return <p>there are not events to show</p>;
  }

  return (
    <div>
      {props.events.map(e => {
        return <div key={e.id}>{e.name}</div>;
      })}
    </div>
  );
};

export default EventList;
