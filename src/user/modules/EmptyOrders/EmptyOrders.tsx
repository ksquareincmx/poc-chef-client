import React from "react";
import { LinkStyled } from "src/common/ui/Link";
import { GradientButton } from "src/common/ui/Buttons";
import { EmptyData } from "src/common/views/EmptyData";

export const EmptyOrders: React.SFC = () => {
  return (
    <EmptyData
      title={"You have no pending Orders"}
      img={require("src/images/pork.svg")}
      button={
        <GradientButton>
          <LinkStyled to="/user/events">View Events</LinkStyled>
        </GradientButton>
      }
    />
  );
};
