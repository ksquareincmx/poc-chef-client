import React from "react";
import { NavHeader } from "src/partner/modules/Header";
import { currentEventsRoute } from "src/partner/routes";
import { FloatContentWrapper } from "src/partner/modules/ui";
import { EventDetailsContainer } from "./EventDetailsContainer";

export const EventDetails: React.SFC = () => {
  return (
    <React.Fragment>
      <NavHeader to={currentEventsRoute} title="event-details" />
      <FloatContentWrapper>
        <EventDetailsContainer />
      </FloatContentWrapper>
    </React.Fragment>
  );
};
