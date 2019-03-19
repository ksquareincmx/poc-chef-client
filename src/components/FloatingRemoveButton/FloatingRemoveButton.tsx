import React from "react";
import styled from "@emotion/styled";

export const FloatingAddButton = styled.div({
  display: "flex",
  position: "relative",
  height: "20px",
  width: "20px",
  borderRadius: "50%",
  background: "linear-gradient(to right, #E83E5D, #F8823D);",
  backgroundSize: "60px 60px",
  backgroundRepeat: "no-repeat",
  alignItems: "center",
  justifyContent: "center",
});

const Img = styled.img({
  position: "absolute",
  width: "80%",
  height: "80%",
});
export interface IButton {
  onClick: () => void;
}
export const Button: React.SFC<IButton> = props => {
  return (
    <FloatingAddButton onClick={props.onClick}>
      <Img src={require("src/images/remove-button.svg")} />
    </FloatingAddButton>
  );
};
