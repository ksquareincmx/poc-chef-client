import React from "react";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { OrdersList } from "./OrdersList";
import { IOrder } from "src/partner/models/Order";
import { EventService } from "src/partner/services";
import { NotificationContext } from "src/providers";

interface IDivOptions {
  color?: string;
}

const activeColorText = "#e83e5d";
const backgroundGrayColor = "#f2f2f2";
const gradientLine = "linear-gradient(to right, #E83E5D, #F8823D);";
const DivOptionsRow = styledComponentsTS<IDivOptions>(styledComponents.div)`
  display: grid;
  color: ${({ color }) => color || "#000"};
  grid-template-columns: 6fr 6fr;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  > div {
      padding: 12px 16px;
  }
  `;

interface IDivOption {
  active?: boolean;
  alternativeColor?: boolean;
}

const DivOption = styledComponentsTS<IDivOption>(styledComponents.div)`
  font-weight: bold;
  color: ${({ alternativeColor }) => (alternativeColor ? activeColorText : "gray")}
  background-color: ${({ active }) => (active ? backgroundGrayColor : "none")};
`;

const DivGradient = styledComponents.div`
  bacground: linear-gradient(to right,#E83E5D,#F8823D);
  height: 2px;
`;

const ATag = styledComponentsTS(styledComponents.a)`
  cursor: pointer;
`;

export interface IEventOrdersContainerProps {
  eventId: string;
}

export interface IEventOrdersContainerState {
  paidOrders: IOrder[];
  unpaidOrders: IOrder[];
  showPaidOrders: boolean;
  checkAll: boolean;
}

export class EventOrdersContainer extends React.Component<
  IEventOrdersContainerProps,
  IEventOrdersContainerState
> {
  state = {
    paidOrders: [],
    unpaidOrders: [],
    showPaidOrders: false,
    checkAll: false
  };
  static contextType = NotificationContext.NotificationContext;

  async componentDidMount() {
    const orders = await EventService.eventService.getOrdersByEventId(this.props.eventId);
    this.setState(() => ({
      paidOrders: orders.filter((o: IOrder) => o.paid),
      unpaidOrders: orders.filter((o: IOrder) => !o.paid)
    }));
  }

  handleCheckAll = (checked: boolean) => {
    const checkOrder = (order: IOrder) => {
      order.checked = checked;
      return order;
    };

    this.setState(prevState => {
      return prevState.showPaidOrders
        ? {
            ...prevState,
            checkAll: checked,
            paidOrders: prevState.paidOrders.map(checkOrder)
          }
        : {
            ...prevState,
            checkAll: checked,
            unpaidOrders: prevState.unpaidOrders.map(checkOrder)
          };
    });
  };

  handleCheckOrder = (orderId: number, e: any) => {
    const checkOrder = (order: IOrder) => {
      if (order.id === orderId) {
        order.checked = e.currentTarget.checked;
      }
      return order;
    };

    if (this.state.showPaidOrders) {
      this.setState({ paidOrders: this.state.paidOrders.map(checkOrder) });
    } else {
      this.setState({ unpaidOrders: this.state.unpaidOrders.map(checkOrder) });
    }
  };

  handleMoveOrders = () => {
    const { paidOrders, unpaidOrders } = this.state;
    const keyOrders = this.state.showPaidOrders ? "paidOrders" : "unpaidOrders";
    const checkedOrders = this.state[keyOrders].filter((order: IOrder) => order.checked);
    const uncheckedOrders = this.state[keyOrders].filter((order: IOrder) => !order.checked);

    this.setState(prevState => {
      return prevState.showPaidOrders
        ? {
            paidOrders: uncheckedOrders,
            unpaidOrders: [...unpaidOrders, ...checkedOrders]
          }
        : {
            unpaidOrders: uncheckedOrders,
            paidOrders: [...paidOrders, ...checkedOrders]
          };
    });
    if (checkedOrders.length > 0) {
      this.context.handleShowNotification(
        `Orders marked as ${this.state.showPaidOrders ? "unpaid" : "paid"}.`
      );
    }
  };

  handleShowTabs = (paidTab: boolean) => {
    this.setState(() => ({ showPaidOrders: paidTab }), () => this.handleCheckAll(false));
  };

  render() {
    const { paidOrders, unpaidOrders, showPaidOrders } = this.state;
    return (
      <>
        <DivOptionsRow>
          <DivOption>Event Summary</DivOption>
          <DivOption alternativeColor>
            <ATag onClick={this.handleMoveOrders}>
              {this.state.showPaidOrders ? "MOVE TO UNPAID" : "MOVE TO PAID"}
            </ATag>
          </DivOption>
        </DivOptionsRow>
        <DivOptionsRow>
          <DivOption active={!showPaidOrders} alternativeColor={!showPaidOrders}>
            <ATag onClick={() => this.handleShowTabs(false)}>Unpaid People</ATag>
          </DivOption>
          <DivOption active={showPaidOrders}>
            <ATag onClick={() => this.handleShowTabs(true)}>Paid People</ATag>
          </DivOption>
        </DivOptionsRow>
        <OrdersList
          orders={showPaidOrders ? paidOrders : unpaidOrders}
          handleCheckAll={this.handleCheckAll}
          handleCheckOrder={this.handleCheckOrder}
          checkAll={this.state.checkAll}
        />
      </>
    );
  }
}
