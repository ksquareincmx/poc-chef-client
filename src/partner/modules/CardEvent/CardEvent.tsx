import React from "react";
import {
  TextTitleCardEvent,
  TextDescriptionCardEvent,
  TextTableTitleCardEvent,
  TextTableRowCardEvent,
} from "src/common/ui/Text";
import { IEvent } from "src/partner/models";
import {
  CardContainer,
  CardRowHeader,
  CardRow,
  CardDescription,
  CardDivActionsContainer,
  CardTextHeaderContainer,
  CardIconImg,
  CardLinkIcon,
} from "src/common/ui/Card";

interface CardEventProps {
  key: string;
  eventInfo: IEvent.IEvent;
}

export const CardEvent: React.SFC<CardEventProps> = ({ eventInfo }) => {
  const printProducts = () => {
    return eventInfo.products.map((e, idx) => {
      return (
        <CardRow key={idx}>
          <TextTableRowCardEvent>{e.name}</TextTableRowCardEvent>
          <TextTableRowCardEvent>{e.price}</TextTableRowCardEvent>
        </CardRow>
      );
    });
  };

  return (
    <CardContainer>
      <CardRowHeader>
        <CardTextHeaderContainer>
          <TextTitleCardEvent>{eventInfo.name}</TextTitleCardEvent>
        </CardTextHeaderContainer>
        <CardDivActionsContainer>
          <CardLinkIcon height="1.5rem" to={`event-details/${eventInfo.id}`}>
            <CardIconImg
              width="1.5rem"
              height="1.5rem"
              src={require("src/images/icons/baseline-visibility-24px.svg")}
              alt="view-button"
            />
          </CardLinkIcon>
          <CardLinkIcon height="1.5rem" to={`event-edit/${eventInfo.id}`}>
            <CardIconImg
              width="1.5rem"
              height="1.5rem"
              alt="edit-button"
              src={require("src/images/icons/baseline-edit-24px.svg")}
            />
          </CardLinkIcon>
        </CardDivActionsContainer>
      </CardRowHeader>
      <CardDescription>
        <TextDescriptionCardEvent>Created: {eventInfo.startDateString}</TextDescriptionCardEvent>
        <TextDescriptionCardEvent>Expired: {eventInfo.endDateString}</TextDescriptionCardEvent>
      </CardDescription>
      <CardRow>
        <TextTableTitleCardEvent>Product</TextTableTitleCardEvent>
        <TextTableTitleCardEvent>Price</TextTableTitleCardEvent>
      </CardRow>
      <div>{printProducts()}</div>
    </CardContainer>
  );
};
