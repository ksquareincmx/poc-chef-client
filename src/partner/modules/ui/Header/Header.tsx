import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";

interface IHeaderContainerProps {
  userStyle?: boolean;
}

export const HeaderContainer = styledComponentsTS<IHeaderContainerProps>(styledComponents.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 0.5rem;
  background: ${(props: IHeaderContainerProps) =>
    props.userStyle ? "linear-gradient(to right, #F8823D, #E83E5D)" : "#999"};
  width: 100vw;
  height: 6.5rem;
`;

export const HeaderLogoContainer = styledComponents.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  boxSizing: "border-box",
  paddingLeft: "5px",
  height: "100%",
  width: "33%",
});

export const Logo = styledComponents.img({
  height: "2.3125rem",
  width: "6.5625rem",
});

export const HeaderTitleContainer = styledComponents.div({
  boxSizing: "border-box",
  height: "100%",
  width: "33%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const Title = styledComponents.h1({
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "14px",
  textAlign: "center",
  color: "white",
  width: "4.0625rem",
  height: "1.25rem",
});
// Not sure if the last two properties are necessary

export const HeaderUserImgContainer = styledComponents.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "100%",
  width: "30%",
  boxSizing: "border-box",
  paddingRight: "5px",
});

export const UserImg = styledComponents.img({
  width: "2.5rem",
  height: "2.5rem",
  boxSizing: "border-box",
  padding: "0.5rem",
  objectFit: "contain",
  borderRadius: "50%",
  background: "#d8d8d8",
  border: "solid 2px white",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.3)",
});
