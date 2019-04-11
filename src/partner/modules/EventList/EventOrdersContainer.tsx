import React, { useState, useRef, useReducer, useEffect, ChangeEvent } from "react";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { OrdersList } from "./OrdersList";
import { NotificationContext } from "src/providers";
import reducerEventOrders, {
  initialEventOrdersState,
  fetchEventOrders,
  checkAllPaidOrders,
  checkAllUnpaidOrders,
  checkPaidOrderById,
  checkUnpaidOrderById,
  moveCheckedOrdersToUnpaid,
  moveCheckedOrdersToPaid,
} from "src/partner/ducks/eventOrders";

interface IDivOptions {
  color?: string;
}

const activeColorText = "#e83e5d";
const backgroundGrayColor = "#f2f2f2";
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

export const EventOrdersContainer: React.FC<IEventOrdersContainerProps> = props => {
  const context = React.useContext(NotificationContext.NotificationContext);
  const [checkAll, setCheckAll] = useState(false);
  const showPaidOrders = useRef(false);
  const [state, dispatch] = useReducer(reducerEventOrders, initialEventOrdersState);

  useEffect(() => {
    fetchEventOrders(props.eventId, dispatch);
  }, []);

  const handleCheckAll = (checked: boolean) => {
    setCheckAll(checked);
    if (showPaidOrders.current) {
      dispatch(checkAllPaidOrders(checked));
    } else {
      dispatch(checkAllUnpaidOrders(checked));
    }
  };

  const handleCheckOrder = (orderId: string, e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked;
    if (showPaidOrders.current) {
      dispatch(checkPaidOrderById(orderId, checked));
    } else {
      dispatch(checkUnpaidOrderById(orderId, checked));
    }
  };

  const handleMoveOrders = () => {
    if (showPaidOrders.current) {
      dispatch(moveCheckedOrdersToUnpaid());
    } else {
      dispatch(moveCheckedOrdersToPaid());
    }

    context.handleShowNotification(
      `Orders marked as ${showPaidOrders.current ? "unpaid" : "paid"}`,
    );
  };

  const handleShowTabs = (paidTab: boolean) => {
    showPaidOrders.current = paidTab;
    handleCheckAll(false);
  };

  return (
    <>
      <DivOptionsRow>
        <DivOption>Event Summary</DivOption>
        <DivOption alternativeColor>
          <ATag onClick={handleMoveOrders}>
            {showPaidOrders.current ? "MOVE TO UNPAID" : "MOVE TO PAID"}
          </ATag>
        </DivOption>
      </DivOptionsRow>
      <DivOptionsRow>
        <DivOption active={!showPaidOrders.current} alternativeColor={!showPaidOrders}>
          <ATag onClick={() => handleShowTabs(false)}>Unpaid People</ATag>
        </DivOption>
        <DivOption active={showPaidOrders.current}>
          <ATag onClick={() => handleShowTabs(true)}>Paid People</ATag>
        </DivOption>
      </DivOptionsRow>
      <OrdersList
        orders={showPaidOrders.current ? state.paidOrders : state.unpaidOrders}
        handleCheckAll={handleCheckAll}
        handleCheckOrder={handleCheckOrder}
        checkAll={checkAll}
      />
    </>
  );
};
