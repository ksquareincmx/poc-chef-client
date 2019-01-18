import React from "react";
import Header from "../modules/Header";
import EventListContainer from "../modules/EventList";
import NavBar from "../modules/NavBar";

const CurrentEventsView = () => {
  return (
    <React.Fragment>
      <Header title="Current Events" />
      <EventListContainer />
      <NavBar />
    </React.Fragment>
  );
};

export default CurrentEventsView;
