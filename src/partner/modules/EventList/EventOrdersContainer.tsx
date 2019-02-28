import React from "react";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import orders from "src/interfaces/orders";
import { OrdersList } from "./OrdersList";
import { IOrderEntity } from "src/partner/models/Order";

interface IDivOptions {
  color?: string;
}

const DivOptions = styledComponentsTS<IDivOptions>(styledComponents.div)`
  display: grid;
  color: ${({ color }) => color || "#000"};
  grid-template-columns: 6fr 6fr;
  text-align: center;
  border-top: 2px solid #f3f3f3;
  > div {
      padding: 12px 16px;
  }
  `;

export interface IEventOrdersContainerProps {
  eventId: string;
}

export interface IEventOrdersContainerState {
  orders: IOrderEntity[];
}

export class EventOrdersContainer extends React.Component<IEventOrdersContainerProps> {
  state = {
    orders: []
  };

  componentDidMount() {
    //Todo: Make a request to get the event orders
    this.setState({ orders });
  }

  render() {
    return (
      <>
        <DivOptions>
          <div>Event Summary</div>
          <div>Move to paid</div>
        </DivOptions>
        <DivOptions>
          <div>Unpaid People</div>
          <div>Paid People</div>
        </DivOptions>
        <OrdersList orders={this.state.orders} />
      </>
    );
  }
}
