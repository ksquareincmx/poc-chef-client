import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import {
  IH1Props,
  IH2Props,
  IRowDataContainerProps,
  IEventRowItemProps
} from "../../../interfaces/EventUI";

export const EventsContainer = styledComponents.div({
  marginTop: "-25px",
  padding: "0 15px 70px 15px",
  height: "100%",
  overflowY: "auto"
});

export const H1 = styledComponentsTS<IH1Props>(styledComponents.h1)`
  margin: 0;
  font-family: unset;
  font-size: 16px;
  font-style: bold;
  margin: ${(props: IH1Props) => props.margin || "0"};
  text-align: ${(props: IH1Props) => props.textAlign || "center"};
`;

export const ImgMenu = styledComponents.img({
  width: "1.5em",
  height: "1.5em",
  padding: "0",
  margin: "-5px -10px 0 0",
  objectFit: "contain"
});

export const H2 = styledComponentsTS<IH2Props>(styledComponents.h2)`
  margin: 0;
  font-family: unset;
  font-size: 12px;
  font-style: bold;
  width: 100%;
  text-align: ${(props: IH2Props) => props.textAlign};
`;

export const RowDataContainer = styledComponentsTS<IRowDataContainerProps>(
  styledComponents.div
)`
width: 100%;
padding: ${(props: IRowDataContainerProps) => props.padding || "15px 20px"};
box-sizing: border-box;
border-bottom: ${(props: IRowDataContainerProps) =>
  props.borderBottom || "2px solid #f3f3f3"};
`;

export const Table = styledComponentsTS(styledComponents.table)`
  width: 100%;
  padding: 5px 20px;
`;

export const RowData = styledComponents.div({
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between"
});

export const EventRowItem = styledComponentsTS<IEventRowItemProps>(
  styledComponents.p
)`
  margin: 5px 0 0 0;
  padding: 0;
  font-family: unset;
  font-size: 12px;
  font-style: bold;
  justify-content: space-between;
  text-align: ${(props: IEventRowItemProps) => props.textAlign || "center"};
`;
