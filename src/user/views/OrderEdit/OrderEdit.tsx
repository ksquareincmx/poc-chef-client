import React from "react";
import { Header } from "src/partner/modules/Header";
import { FloatContentWrapper } from "src/common/ui/ContentWrapper";

export const OrderEdit: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="Order" />
      <FloatContentWrapper />
    </React.Fragment>
  );
};
