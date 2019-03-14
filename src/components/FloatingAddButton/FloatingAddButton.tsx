import React from "react";
import styled from "@emotion/styled";

export const FloatingAddButton = styled.div({
  display: "flex",
  position: "fixed",
  zIndex: 2,
  right: "16px",
  bottom: "64px",
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  marginLeft: "280px",
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
      <Img src={require("src/images/add-button.svg")} />
    </FloatingAddButton>
  );
};
