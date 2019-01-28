import styledComponents from "styled-components";

export const HeaderContainer = styledComponents.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "5px 15px 25px 15px",
  background: "linear-gradient(to right, #F8823D, #E83E5D)",
  width: "100vw",
  height: "6em"
});

export const HeaderLogoContainer = styledComponents.div({
  boxSizing: "border-box",
  height: "100%",
  width: "30%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
});

export const ImgLogo = styledComponents.img({
  width: "100%",
  height: "100%",
  objectFit: "contain"
});

export const HeaderTitleContainer = styledComponents.div({
  boxSizing: "border-box",
  padding: "5px",
  height: "100%",
  width: "40%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
});

export const H1 = styledComponents.h1({
  textAlign: "center",
  fontFamily: "unset",
  color: "white",
  fontSize: "16px"
});

export const HeaderUserIconContainer = styledComponents.div({
  boxSizing: "border-box",
  padding: "5px",
  height: "100%",
  width: "30%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end"
});

export const ImgUserPhoto = styledComponents.img({
  width: "2.5em",
  height: "2.5em",
  objectFit: "contain"
});
