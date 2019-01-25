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
  background: "WhiteSmoke"
});

export const P = styledComponents.p({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "44px",
  margin: "0",
  fontFamily: "unset",
  fontWeight: "bold",
  fontSize: "14px",
  color: "#E83E5D",
  textDecoration: "unset"
});

export const Selector = styledComponents.div({
  margin: "0",
  padding: "0",
  height: "6px",
  width: "100%",
  background: "linear-gradient(to right, #E83E5D, #F8823D)"
});
