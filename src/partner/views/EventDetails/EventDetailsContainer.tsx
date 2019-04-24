import React from "react";
import {
  CardContainer,
  CardRowHeader,
  CardDescription,
  CardTextHeaderContainer,
} from "src/common/ui/Card";
import { TextTitleCardEvent, TextDescriptionCardEvent } from "src/partner/modules/ui/Text";
import { OrderListContainer } from "./OrderListContainer";
import { order } from "src/partner/models/Order";

export const EventDetailsContainer: React.SFC = () => {
  //temporal data fake
  const eventDataFake = {
    name: "Event name 1",
    created: "27/07/2018",
    expired: "28/07/2018",

    orders: [
      {
        id: "1asa52",
        orderedBy: "Michelle Ayala",
        total: "79.00",
        paid: true,
        products: [
          {
            id: "p15a52",
            name: "Product 1",
            amount: "77.77",
          },
          {
            id: "p15a5aasa2",
            name: "Product 2",
            amount: "6.66",
          },
          {
            id: "p15a545a522",
            name: "Product 3",
            amount: "69.00",
          },
        ],
      },
    ],
  };

  const updateStatusPaidOrder = () => {
    //update order status
  };

  return (
    <React.Fragment>
      <div style={{ display: "grid", gridGap: "1rem" }}>
        <CardContainer>
          <CardRowHeader>
            <CardTextHeaderContainer>
              <TextTitleCardEvent>{eventDataFake.name}</TextTitleCardEvent>
            </CardTextHeaderContainer>
          </CardRowHeader>
          <CardDescription>
            <TextDescriptionCardEvent>Created at: {eventDataFake.created}</TextDescriptionCardEvent>
            <TextDescriptionCardEvent>Expired at: {eventDataFake.expired}</TextDescriptionCardEvent>
          </CardDescription>
        </CardContainer>
        <OrderListContainer
          orders={eventDataFake.orders}
          updateStatusPaidOrder={updateStatusPaidOrder}
        />
      </div>
    </React.Fragment>
  );
};
