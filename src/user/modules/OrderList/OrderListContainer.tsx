import React, { useEffect, useState, useReducer } from "react";
import { OrderItem } from "./OrderItem";
import { IOrder } from "src/partner/models/Order";
import { List } from "src/partner/modules/ui/List/List";
import { Picture } from 'src/user/modules/Picture'
import { Title } from 'src/user/modules/Title'
import reducer, { initialState, getOrders } from "src/user/ducks/order";
import { GradientButton } from 'src/common/ui/GradientButton'
import { Link } from 'react-router-dom'

interface IOrderListContainerProps {
  userId: string;
  openCancelModal: (orderId: string) => void;
}

export const OrderListContainer: React.FC<IOrderListContainerProps> = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getOrders(props.userId, dispatch);
  }, []);

  const printListOrders = () => {
    return state.orders.map((order: IOrder, idx: number) => (
      <OrderItem order={order} key={idx} openCancelModal={props.openCancelModal} />
    ));
  };

  if (!state.loading && !state.orders.length) {
    return (
      <div style={{textAlign: 'center', padding: '6rem 0'}}>
        <Title>You have no pending orders</Title>
        <Picture src={require("src/images/pork-copy@2x.png")} />
        <Link style={{textDecoration: 'none'}} to='/user/events'>
          <GradientButton>VIEW EVENTS</GradientButton>
        </Link>
      </div>
    );
  }
  return (
    <List>
      {state.loading && <>Loading</>}
      {state.error && <>An error has occurred, please try again</>}
      {!state.loading && !state.error && printListOrders()}
    </List>
  );
};
