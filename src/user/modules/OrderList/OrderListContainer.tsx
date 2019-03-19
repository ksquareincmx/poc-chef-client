import React, { useEffect, useState } from "react";
import { OrderItem } from "./OrderItem";
import { orderService } from "src/user/services/OrderService";
import { IOrder } from "src/partner/models/Order";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { List } from "src/partner/modules/ui/List/List";

interface IOrderListContainerProps {
  userId: number;
}

export const OrderListContainer: React.FC<IOrderListContainerProps> = props => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const fetchOrders = async () => {
    const orders = await orderService.getOrdersByUserId(props.userId);
    setOrders(orders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const printListOrders = () => {
    return orders.map((order, idx) => <OrderItem order={order} key={idx} />);
  };
  return <List>{printListOrders()}</List>;
};
