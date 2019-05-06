import React from "react";
import { Header } from "src/partner/modules/Header";
import { OrderListContainer } from "src/user/modules/OrderList";
import { ContentWrapper } from "src/common/ui/ContentWrapper";

export const MyOrders: React.SFC = () => {
  return (
    <React.Fragment>
      <Header title="My Orders" userStyle />
      <ContentWrapper>
        <OrderListContainer />
      </ContentWrapper>
    </React.Fragment>
  );
};
