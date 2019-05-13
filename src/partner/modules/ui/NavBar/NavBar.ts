import styledComponents from "styled-components";
import { MIN_WIDTH_CONTAINER } from "src/common/consts";

export const NavBarContainer = styledComponents.div({
  position: "fixed",
  bottom: "0px",
  width: "100%",
  height: "2.5rem",
  display: "flex",
  flexDirection: "row",
  boxShadow: "0 -1px 10px gray",
  background: "white",
  minWidth: MIN_WIDTH_CONTAINER,
});

export const Item = styledComponents.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  fontWeight: "bold",
});
