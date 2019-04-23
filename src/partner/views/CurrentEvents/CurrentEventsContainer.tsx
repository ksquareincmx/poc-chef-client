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
            <LinkStyled to="create-event">
              <img
                style={{ width: "1rem", height: "1rem", marginRight: ".625rem" }}
                src={require("src/images/icons/baseline-add_circle_outline-24px_white.svg")}
              />
              Create Event
            </LinkStyled>
          </GradientButton>
        </div>
      )}
      <ContentWrapper>
        <EventList events={events} />
      </ContentWrapper>
    </React.Fragment>
  );
};
