import React from "react";
import { LinkStyled } from "src/common/ui/Link";
import { GradientButton } from "src/common/ui/Buttons";
import { EmptyData } from "src/common/views/EmptyData";

export const EmptyEvents: React.SFC = () => {
  return (
    <EmptyData
      title={"You have no events yet"}
      img={require("src/images/pork.svg")}
      button={
        <GradientButton>
          <LinkStyled to="partner/create-event">Create Event</LinkStyled>
        </GradientButton>
      }
    />
  );
};
