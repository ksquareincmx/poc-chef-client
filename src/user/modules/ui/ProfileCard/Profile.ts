import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";

interface ICardTextLabelProps {
  bold?: boolean;
}

export const CardTextLabel = styledComponentsTS<ICardTextLabelProps>(styledComponents.h1)`
  font-family: Roboto;
  font-weight: ${(props: ICardTextLabelProps) => (props.bold ? "bold" : "normal")};
  font-Size: 14px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25rem;
  letter-spacing: normal;
  color: #515354;
  align-content: center;
  margin: 0.125rem 0px 0.625rem
`;

const BaseIcon = styledComponents.img({
  width: "1.5rem",
  height: "1.5rem",
  objectFit: "contain",
});

export const CardNormalIcon = styledComponents(BaseIcon)`
  margin: 0 1.125rem 0.5rem 1.5rem;
`;

export const CardNavIcon = styledComponents(BaseIcon)`
  margin-top: 1rem;
  margin-right: 1rem; 
`;

export const Card = styledComponents.div({
  display: "flex",
  flexDirection: "column",
  width: "21.4375rem",
  height: "15.8125rem",
  borderRadius: "0.25rem",
  background: "white",
  margin: "0 auto",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.3)",
});

export const CardNavIconContainer = styledComponents.div({
  display: "flex",
  height: "2.5rem",
  flexDirection: "row",
  justifyContent: "flex-end",
});

export const CardUserImgContainer = styledComponents.div({
  display: "flex",
  boxSizing: "border-box",
  height: "5rem",
  width: "5rem",
  margin: "0px auto 1.625rem",
  borderRadius: "50%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const CardUserImg = styledComponents.img({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const CardDetails = styledComponents.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const CardItem = styledComponents.div({
  display: "flex",
  flexDirection: "row",
});
