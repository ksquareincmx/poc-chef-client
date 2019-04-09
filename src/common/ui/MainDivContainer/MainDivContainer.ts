import styledComponents from "styled-components";

export const MainDivContainer = styledComponents.div({
  height: "100vh",
  width: "100vw",
  backgroundImage: "linear-gradient(to bottom, #e83e5d, #f8823d)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Roboto"
});

export const ImgLogo = styledComponents.img({
  minWidth: "264px",
  minHeight: "98px"
});
