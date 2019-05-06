import React from "react";
import { Header } from "src/partner/modules/Header";
import { OrderListContainer } from "src/user/modules/OrderList";
import { ContentWrapper } from "src/common/ui/ContentWrapper";
import { RouteComponentProps } from "react-router";

export const HistoryOrders: React.SFC<RouteComponentProps> = () => {
  return (
    <React.Fragment>
      <Header title="History" userStyle />
      <ContentWrapper>
        <OrderListContainer historyView={true} />
      </ContentWrapper>
    </React.Fragment>
  );
};
