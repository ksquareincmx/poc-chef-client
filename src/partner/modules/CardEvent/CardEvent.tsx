import React from "react";
import styles from "styled-components";
import { TextTitleCardEvent } from "../ui/Text";
import {
  TextDescriptionCardEvent,
  TextTableTitleCardEvent,
  TextTableRowCardEvent,
} from "../ui/Text/Text";
import { IEvent } from "src/partner/models";
import { Link } from "react-router-dom";

const CardContainer = styles.div`
    width: 21.435rem;
    margin: 0px auto;
    background-color: #fff;
    border-radius: .25rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
`;

const CardRowHeader = styles.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .5rem 1rem 0.46875rem 1rem;
    border-bottom: 1px solid #f2f2f2;
`;

const CardRow = styles(CardRowHeader)`
    padding: .46875rem 1rem;
`;

const CardDescription = styles.div`
    display: grid;
    grid-gap: .25rem;
    padding: 0.46875rem 1rem 0.46875rem 1rem;
    border-bottom: 1px solid #f2f2f2;
`;

const DivActionsContainer = styles.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

const IconImg = styles.img({
  width: "1rem",
  height: "1rem",
});

const LinkIcon = styles(Link)`
  height: 16px;
`;

interface CardEventProps {
  key: string;
  eventInfo: IEvent.IEvent;
}

export const CardEvent: React.SFC<CardEventProps> = ({ eventInfo }) => {
  const printProducts = () => {
    return [1, 2, 3].map(e => {
      return (
        <CardRow key={e}>
          <TextTableRowCardEvent>Product</TextTableRowCardEvent>
          <TextTableRowCardEvent>$20.00 MXN</TextTableRowCardEvent>
        </CardRow>
      );
    });
  };

  return (
    <CardContainer>
      <CardRowHeader>
        <TextTitleCardEvent>{eventInfo.name}</TextTitleCardEvent>
        <DivActionsContainer>
          <LinkIcon to={`/view-event/${eventInfo.id}`}>
            <IconImg src={require("src/images/icons/icons8-eye-24.png")} />
          </LinkIcon>
          <LinkIcon to={`/edit-event/${eventInfo.id}`}>
            <IconImg src={require("src/images/icons/mode-edit.svg")} />
          </LinkIcon>
        </DivActionsContainer>
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
