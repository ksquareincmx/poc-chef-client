import React from "react";
import { GradientButton } from "src/common/ui/Buttons";
import { LinkStyled } from "src/common/ui/Link";
import { CardIconImg } from "src/common/ui/Card";

export const CreateEventButton: React.SFC = () => {
  return (
    <GradientButton>
      <LinkStyled to="create-event" style={{ display: "flex" }}>
        <CardIconImg
          width="1.125rem"
          height="1.125rem"
          margin="auto .32rem"
          src={require("src/images/icons/baseline-add_circle_outline-24px_white.svg")}
        />
        Create Event
      </LinkStyled>
    </GradientButton>
  );
};
