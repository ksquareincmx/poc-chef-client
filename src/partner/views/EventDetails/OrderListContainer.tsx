import React from "react";
import { CardOrder } from "src/partner/modules/CardOrder";

interface IOrderListContainerProps {
  orders: any; //temporal
  updateStatusPaidOrder: () => void;
}

export const OrderListContainer: React.SFC<IOrderListContainerProps> = ({
  orders,
  updateStatusPaidOrder,
}) => {
  return orders.map((order: any) => (
    <CardOrder key={order.id} order={order} updateStatusPaidOrder={updateStatusPaidOrder} />
  ));
};
