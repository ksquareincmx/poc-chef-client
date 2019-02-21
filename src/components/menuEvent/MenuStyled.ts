import styledComponents from "styled-components";

export const MenuContainerStyled = styledComponents.div({
  position: "fixed",
  display: "flex",
  background: "white",
  width: "56px",
  height: "40px",
  right: "8px",
  flexDirection: "column",
  paddingLeft: "16px",
  paddingRight: "24px",
  paddingBottom: "16px",
});

export const MenuItemStyled = styledComponents.div({
  width: "72px",
  height: "16px",
  background: "white",
  display: "flex",
  marginTop: "8px",
  fontSize: "12px",
});
