import React from "react";
import { Header } from "src/partner/modules/Header";
import { FloatContentWrapper } from "src/common/ui/ContentWrapper";
import { OrderEditContainer } from "./OrderEditContainer";

export const OrderEdit: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="My Order" />
      <FloatContentWrapper>
        <OrderEditContainer />
      </FloatContentWrapper>
    </React.Fragment>
  );
};
