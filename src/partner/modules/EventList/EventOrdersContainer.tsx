import React, { useState } from "react";
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

export const EventOrdersContainer: React.FC<IEventOrdersContainerProps> = props => {
  const context = React.useContext(NotificationContext.NotificationContext);
  const [paidOrders, setPaidOrders] = useState<IOrder[]>([]);
  const [unpaidOrders, setUnpaidOrders] = useState<IOrder[]>([]);
  const [showPaidOrders, setShowPaidOrders] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const fetchOrders = async () => {
    const orders = await EventService.eventService.getOrdersByEventId(props.eventId);
    const paidOrders = orders.filter((o: IOrder) => o.paid);
    const unpaidOrders = orders.filter((o: IOrder) => !o.paid);
    setPaidOrders(paidOrders);
    setUnpaidOrders(unpaidOrders);
  };

  React.useEffect(() => {
    fetchOrders();
  }, []);

  const handleCheckAll = (checked: boolean) => {
    const checkOrder = (order: IOrder) => {
      order.checked = checked;
      return order;
    };

    setCheckAll(checked);

    if (showPaidOrders) {
      return setPaidOrders(paidOrders.map(checkOrder));
    }
    setUnpaidOrders(unpaidOrders.map(checkOrder));
  };

  const handleCheckOrder = (orderId: number, e: any) => {
    const checkOrder = (order: IOrder) => {
      if (order.id === orderId) {
        order.checked = e.currentTarget.checked;
      }
      return order;
    };

    if (showPaidOrders) {
      setPaidOrders(paidOrders.map(checkOrder));
    } else {
      setUnpaidOrders(unpaidOrders.map(checkOrder));
    }
  };

  const getCheckedAndUncheckedOrders = () => {
    if (showPaidOrders) {
      const checkedOrders = paidOrders.filter((order: IOrder) => order.checked);
      const uncheckedOrders = paidOrders.filter((order: IOrder) => !order.checked);
      return { checkedOrders, uncheckedOrders };
    }
    const checkedOrders = unpaidOrders.filter((order: IOrder) => order.checked);
    const uncheckedOrders = unpaidOrders.filter((order: IOrder) => !order.checked);
    return { checkedOrders, uncheckedOrders };
  };

  const handleMoveOrders = () => {
    const { checkedOrders, uncheckedOrders } = getCheckedAndUncheckedOrders();
    if (showPaidOrders) {
      setPaidOrders(uncheckedOrders);
      setUnpaidOrders([...unpaidOrders, ...checkedOrders]);
    } else {
      setUnpaidOrders(uncheckedOrders);
      setPaidOrders([...paidOrders, ...checkedOrders]);
    }
    if (checkedOrders.length > 0) {
      context.handleShowNotification(`Orders marked as ${showPaidOrders ? "unpaid" : "paid"}.`);
    }
    setCheckAll(false);
  };

  const handleShowTabs = (paidTab: boolean) => {
    setShowPaidOrders(paidTab);
    handleCheckAll(false);
  };

  return (
    <>
      <DivOptionsRow>
        <DivOption>Event Summary</DivOption>
        <DivOption alternativeColor>
          <ATag onClick={handleMoveOrders}>
            {showPaidOrders ? "MOVE TO UNPAID" : "MOVE TO PAID"}
          </ATag>
        </DivOption>
      </DivOptionsRow>
      <DivOptionsRow>
        <DivOption active={!showPaidOrders} alternativeColor={!showPaidOrders}>
          <ATag onClick={() => handleShowTabs(false)}>Unpaid People</ATag>
        </DivOption>
        <DivOption active={showPaidOrders}>
          <ATag onClick={() => handleShowTabs(true)}>Paid People</ATag>
        </DivOption>
      </DivOptionsRow>
      <OrdersList
        orders={showPaidOrders ? paidOrders : unpaidOrders}
        handleCheckAll={handleCheckAll}
        handleCheckOrder={handleCheckOrder}
        checkAll={checkAll}
      />
    </>
  );
};
