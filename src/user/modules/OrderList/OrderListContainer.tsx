import React, { useEffect, useReducer } from "react";
import { OrderItem } from "./OrderItem";
import { IOrder } from "src/partner/models/Order";
import { List } from "src/partner/modules/ui/List/List";
import reducer, { initialState, getOrders } from "src/user/ducks/order";
import { EmptyOrders } from "../EmptyOrders";

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
      <OrderItem key={idx} order={order} onCancelOrderModalOpen={props.onCancelOrderModalOpen} />
    ));
  };

  return (
    <List>
      {state.loading && <>Loading</>}
      {state.error && <>{state.error.message}</>}
      {!state.loading && !state.error && state.orders.length === 0 && <EmptyOrders />}
      {!state.loading && !state.error && state.orders.length > 0 && printListOrders()}
    </List>
  );
};
