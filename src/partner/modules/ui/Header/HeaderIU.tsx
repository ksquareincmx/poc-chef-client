import styled from "@emotion/styled";

export const HeaderContainer = styled.div({
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

export const HeaderLogoContainer = styled.div({
  boxSizing: "border-box",
  height: "100%",
  width: "30%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
});

export const ImgLogo = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "contain"
});

export const HeaderTitleContainer = styled.div({
  boxSizing: "border-box",
  padding: "5px",
  height: "100%",
  width: "40%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
});

export const H1 = styled.h1({
  textAlign: "center",
  fontFamily: "unset",
  color: "white",
  fontSize: "16px"
});

export const HeaderUserIconContainer = styled.div({
  boxSizing: "border-box",
  padding: "5px",
  height: "100%",
  width: "30%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end"
});

export const ImgUserPhoto = styled.img({
  width: "2.5em",
  height: "2.5em",
  objectFit: "contain"
});
