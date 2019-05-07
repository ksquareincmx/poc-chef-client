import React, { useState, useEffect, useContext } from "react";
import {
  CardContainer,
  CardRowHeader,
  CardDescription,
  CardTextHeaderContainer,
} from "src/common/ui/Card";
import { TextTitleCardEvent, TextDescriptionCardEvent } from "src/common/ui/Text";
import { OrderListContainer } from "./OrderListContainer";
import { IEvent, IOrder } from "src/partner/models";
import { event } from "src/partner/models/Event";
import { eventService } from "src/partner/services";
import { RouteComponentProps, withRouter } from "react-router";
import { unixDateToString } from "src/common/mappers/DateMapper";
import { NotificationContext } from "src/providers";
import { OrderService } from "src/partner/services/OrderService";

interface IEventDetailsContainerComponentProps {
  match: { params: { id: string } };
}

const EventDetailsContainerComponent: React.FC<
  RouteComponentProps & IEventDetailsContainerComponentProps
> = ({ match }) => {
  const [eventDetails, setEventDetails] = useState<IEvent.IEvent>(event());
  const notificationContext = useContext(NotificationContext.NotificationContext);

  const fetchEvent = async () => {
    try {
      const event = await eventService.getEventById(match.params.id);
      setEventDetails({ ...event });
    } catch (err) {
      notificationContext.handleShowNotification(err.message);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const updateStatusPaidOrder = async (order: IOrder.IOrder) => {
    try {
      if (!order.paid) {
        const updateOrder = await OrderService.markOrderAsPaid(order.id);
        console.log(updateOrder);
      }
    } catch (err) {
      //show error notification
      console.log(err.message);
    }
  };

  return (
    <React.Fragment>
      <div style={{ display: "grid", gridGap: "1rem" }}>
        <CardContainer>
          <CardRowHeader>
            <CardTextHeaderContainer>
              <TextTitleCardEvent>{eventDetails.name}</TextTitleCardEvent>
            </CardTextHeaderContainer>
          </CardRowHeader>
          <CardDescription>
            <TextDescriptionCardEvent>
              Created at: {unixDateToString(eventDetails.createdAt)}
            </TextDescriptionCardEvent>
            <TextDescriptionCardEvent>
              Expired at: {unixDateToString(eventDetails.expirationDate.getTime())}
            </TextDescriptionCardEvent>
          </CardDescription>
        </CardContainer>
        <OrderListContainer
          orders={eventDetails.orders}
          updateStatusPaidOrder={updateStatusPaidOrder}
        />
      </div>
    </React.Fragment>
  );
};

export const EventDetailsContainer = withRouter(EventDetailsContainerComponent);
