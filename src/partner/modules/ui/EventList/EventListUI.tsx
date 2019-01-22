import styled from "@emotion/styled";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import {
  IH1Props,
  IH2Props,
  IRowDataContainerProps,
  IEventRowItemProps
} from "../../../interfaces/EventUI";

export const H1 = styledComponentsTS<IH1Props>(styledComponents.h1)`
  margin: 0;
  font-family: unset;
  font-size: 16px;
  font-style: bold;
  text-align: ${(props: IH1Props) => props.textAlign};
`;

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
padding: ${(props: IRowDataContainerProps) => props.padding || "5px 20px"};
box-sizing: border-box;
border-bottom: ${(props: IRowDataContainerProps) =>
  props.borderBottom || "2px solid #f3f3f3"};
`;

export const Table = styledComponentsTS(styledComponents.table)`
  width: 100%;
  padding: 5px 20px;
`;

export const RowData = styled.div({
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between"
});

export const EventRowItem = styledComponentsTS<IEventRowItemProps>(
  styledComponents.p
)`
  margin: 0;
  padding: 0;
  font-family: unset;
  font-size: 12px;
  font-style: bold;
  justify-content: space-between;
  text-align: ${(props: IEventRowItemProps) => props.textAlign || "center"};
`;
