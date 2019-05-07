import React from "react";
import { CardOrder } from "src/partner/modules/CardOrder";
import { IOrder } from "src/partner/models";

interface IOrderListContainerProps {
  orders: IOrder.IOrder[];
  updateStatusPaidOrder: (order: IOrder.IOrder) => void;
}

export const OrderListContainer: React.FC<IOrderListContainerProps> = ({
  orders,
  updateStatusPaidOrder,
}) => {
  return (
    <React.Fragment>
      {orders.map((order: IOrder.IOrder) => (
        <CardOrder key={order.id} order={order} updateStatusPaidOrder={updateStatusPaidOrder} />
      ))}
    </React.Fragment>
  );
};
