import React, { useEffect, useState, useReducer } from "react";
import { OrderItem } from "./OrderItem";
import { IOrder } from "src/partner/models/Order";
import { List } from "src/partner/modules/ui/List/List";
import reducer, { initialState, getOrders } from "src/user/ducks/order";

interface IOrderListContainerProps {
  userId: string;
  onCancelOrderModalOpen: (orderId: string) => void;
}

export const OrderListContainer: React.FC<IOrderListContainerProps> = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getOrders(props.userId, dispatch);
  }, []);

  const printListOrders = () => {
    return state.orders.map((order: IOrder, idx: number) => (
      <OrderItem
        key={idx}
        order={order}
        onCancelOrderModalOpen={props.onCancelOrderModalOpen}
      />
    ));
  };

  return (
    <List>
      {state.loading && <>Loading</>}
      {state.error && <>An error has occurred, please try again</>}
      {!state.loading && !state.error && printListOrders()}
    </List>
  );
};
