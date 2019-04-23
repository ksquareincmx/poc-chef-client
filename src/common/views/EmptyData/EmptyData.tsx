import React from "react";
import styles from "styled-components";
import { TextMessage } from "src/common/ui/Text";

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

interface IEmptyEventsProps {
  title: string;
  img: string;
  button?: React.ComponentElement<any, any>;
  textBottom?: string;
}
export const EmptyData: React.SFC<IEmptyEventsProps> = ({ title, img, button, textBottom }) => {
  return (
    <DivContainer>
      <TextMessage>{title}</TextMessage>
      <PorkImage src={img} />
      {textBottom}
      {button}
    </DivContainer>
  );
};
