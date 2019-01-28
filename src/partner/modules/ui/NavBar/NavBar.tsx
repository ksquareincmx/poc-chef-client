import styledComponents from "styled-components";

export const NavBarContainer = styledComponents.div({
  position: "fixed",
  bottom: "0px",
  width: "100%",
  height: "50px",
  display: "flex",
  flexDirection: "row",
  boxShadow: "0 -1px 10px gray",
  background: "white"
});

export const Item = styledComponents.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  fontWeight: "bold"
});
