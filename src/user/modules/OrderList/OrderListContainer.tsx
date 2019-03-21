import React, { useEffect, useState, useReducer } from "react";
import { OrderItem } from "./OrderItem";
import { IOrder } from "src/partner/models/Order";
import { List } from "src/partner/modules/ui/List/List";
import reducer, { initialState, getOrders } from "src/user/ducks/order";

interface IOrderListContainerProps {
  userId: number;
}

export const OrderListContainer: React.FC<IOrderListContainerProps> = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getOrders(props.userId, dispatch);
  }, []);

  const printListOrders = () => {
    return state.orders.map((order: IOrder, idx: number) => <OrderItem order={order} key={idx} />);
  };

  return (
    <List>
      {state.loading && <>Loading</>}
      {state.error && <>An error has occurred, please try again</>}
      {!state.loading && !state.error && printListOrders()}
    </List>
  );
};
