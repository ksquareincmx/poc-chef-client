import React from "react";
import { CardContainer, CardRowHeader, CardDescription } from "src/partner/modules/ui";
import { TextTitleCardEvent, TextDescriptionCardEvent } from "src/partner/modules/ui/Text";

export const EventDetailsContainer: React.SFC = () => {
  return (
    <React.Fragment>
      <CardContainer>
        <CardRowHeader>
          <TextTitleCardEvent>Event name 1</TextTitleCardEvent>
        </CardRowHeader>
        <CardDescription>
          <TextDescriptionCardEvent>Created at: 27/07/2018</TextDescriptionCardEvent>
          <TextDescriptionCardEvent>Created at: 27/07/2018</TextDescriptionCardEvent>
        </CardDescription>
        {
          //OrderListContainer
        }
      </CardContainer>
    </React.Fragment>
  );
};
