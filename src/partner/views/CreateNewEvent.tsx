import React from "react";
import Header from "../modules/Header";
import NewEventForm from "../modules/NewEventForm";

const CreateNewEvent = () => {
  return (
    <React.Fragment>
      <Header title="New Event" />
      <NewEventForm />
    </React.Fragment>
  );
};

export default CreateNewEvent;
