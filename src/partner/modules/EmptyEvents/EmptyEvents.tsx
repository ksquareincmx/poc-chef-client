import React from "react";
import styles from "styled-components";
import { LinkStyled } from "../ui/Link";
import { GradientButton } from "../ui/Buttons";
import { TextMessage } from "../ui/Text";

const DivContainer = styles.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "5rem",
});

const PorkImage = styles.img({
  width: "125px",
  height: "125px",
  margin: "2rem 0px",
});

export const EmptyEvents: React.SFC = () => {
  return (
    <DivContainer>
      <TextMessage>You have no events yet</TextMessage>
      <PorkImage src={require("src/images/pork.svg")} />
      <GradientButton>
        <LinkStyled to="partner/create-event">Create Event</LinkStyled>
      </GradientButton>
    </DivContainer>
  );
};
