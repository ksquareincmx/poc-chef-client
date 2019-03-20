import React from "react";
import { Header } from "src/partner/modules/Header";
import { OrderListContainer } from "src/user/modules/OrderList";

export const MyOrders: React.SFC = () => {
  return (
    <div>
      <Header title="My Orders" />
      <OrderListContainer userId={4} />
    </div>
  );
};
