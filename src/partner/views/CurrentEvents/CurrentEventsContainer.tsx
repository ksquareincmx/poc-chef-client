import React from "react";
import { IEvent } from "src/partner/models/Event";
import { GradientButton } from "src/common/ui/Buttons";
import { LinkStyled } from "src/common/ui/Link";
import { EventList } from "src/partner/modules/EventList/EventList";
import { ContentWrapper } from "src/partner/modules/ui";

export interface CurrentEventsContainerProps {
  events: IEvent[];
}

export const CurrentEventsContainer: React.SFC<CurrentEventsContainerProps> = ({ events = [] }) => {
  return (
    <React.Fragment>
      {events.length > 0 && (
        <div style={{ width: "21.4375rem", textAlign: "right", margin: "1rem auto" }}>
          <GradientButton>
            <LinkStyled to="create-event">Create Event</LinkStyled>
          </GradientButton>
        </div>
      )}
      <ContentWrapper>
        <EventList events={events} />
      </ContentWrapper>
    </React.Fragment>
  );
};
