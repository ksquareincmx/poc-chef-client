import React from "react";
import { NavHeader } from "src/partner/modules/Header";
import { currentEventsRoute, pastEventDetailsRoute, pastEventsRoute } from "src/partner/routes";
import { FloatContentWrapper } from "src/common/ui/ContentWrapper";
import { EventDetailsContainer } from "./EventDetailsContainer";
import { RouteComponentProps } from "react-router";

export const EventDetails: React.FC<RouteComponentProps> = ({ match: { path } }) => {
  const isPastEventDetailsRoute = path === pastEventDetailsRoute;
  return (
    <React.Fragment>
      <NavHeader
        to={isPastEventDetailsRoute ? pastEventsRoute : currentEventsRoute}
        title="event-details"
      />
      <FloatContentWrapper>
        <EventDetailsContainer />
      </FloatContentWrapper>
    </React.Fragment>
  );
};
