import React from "react";
import styled from "@emotion/styled";
import Background from "src/images/add-button.svg";

export const FloatingAddButton = styled.button({
  display: "block",
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  border: "1px solid black",
  marginLeft: "280px",
  backgroundColor: "#ED5553",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundSize: "60px 60px",
  backgroundRepeat: "no-repeat",
});
