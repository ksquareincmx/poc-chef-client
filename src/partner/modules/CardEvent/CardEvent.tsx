import React from "react";
import { TextTitleCardEvent } from "../ui/Text";
import {
  TextDescriptionCardEvent,
  TextTableTitleCardEvent,
  TextTableRowCardEvent,
} from "../ui/Text/Text";
import { IEvent } from "src/partner/models";
import {
  CardContainer,
  CardRowHeader,
  CardRow,
  CardDescription,
  CardDivActionsContainer,
  CardIconImg,
  CardLinkIcon,
} from "../ui/Card";

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
        <TextTitleCardEvent>{eventInfo.name}</TextTitleCardEvent>
        <CardDivActionsContainer>
          <CardLinkIcon to={`/view-event/${eventInfo.id}`}>
            <CardIconImg src={require("src/images/icons/icons8-eye-24.png")} />
          </CardLinkIcon>
          <CardLinkIcon to={`/edit-event/${eventInfo.id}`}>
            <CardIconImg src={require("src/images/icons/mode-edit.svg")} />
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
