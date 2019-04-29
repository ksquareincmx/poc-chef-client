import React from "react";
import { IEvent } from "src/partner/models/Event";
import { EventList } from "src/partner/modules/EventList/EventList";
import { ContentWrapper } from "src/common/ui/ContentWrapper";
import { CreateEventButton } from "src/partner/modules/CreateEventButton";

export interface CurrentEventsContainerProps {
  events: IEvent[];
}

export const CurrentEventsContainer: React.SFC<CurrentEventsContainerProps> = ({ events = [] }) => {
  return (
    <ContentWrapper>
      {events.length > 0 && (
        <div style={{ width: "21.4375rem", textAlign: "right", margin: "1rem auto" }}>
          <CreateEventButton />
        </div>
      )}
      <ContentWrapper height="calc(100vh - 13rem)">
        <EventList events={events} />
      </ContentWrapper>
    </ContentWrapper>
  );
};
