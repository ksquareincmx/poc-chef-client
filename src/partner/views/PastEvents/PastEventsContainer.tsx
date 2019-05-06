import React from "react";
import { IEvent } from "src/partner/models/Event";
import { EventList } from "src/partner/modules/EventList/EventList";
import { ContentWrapper } from "src/common/ui/ContentWrapper";

export interface IPastEventsContainerProps {
  events: IEvent[];
}

export const PastEventsContainer: React.SFC<IPastEventsContainerProps> = ({ events = [] }) => {
  return (
    <ContentWrapper>
      <ContentWrapper height="calc(100vh - 9rem)">
        <EventList events={events} isPastEventView={true} />
      </ContentWrapper>
    </ContentWrapper>
  );
};
