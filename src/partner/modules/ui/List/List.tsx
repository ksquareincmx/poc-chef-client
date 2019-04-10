import styledComponents, { css } from "styled-components";
import styledComponentsTS from "styled-components-ts";

export const ListItem = styledComponents.div({
  boxShadow: "-2px 2px 10px #bdbdbd",
  background: "white",
  width: "100%",
  borderRadius: "10px",
  marginBottom: "10px",
  paddingBottom: "10px",
  boxSizing: "border-box"
});

export const List = styledComponents.div({
  padding: "1rem 1rem 4rem 1rem",
  boxSizing: "border-box"
});

export interface IListItemRowProps {
  borderBottom?: boolean;
}

export const ListItemRow = styledComponentsTS<IListItemRowProps>(styledComponents.div)`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  border-bottom: ${(props: IListItemRowProps) =>
    props.borderBottom ? "2px solid #f3f3f3" : "unset"};

  ::last-child {
    padding-bottom: 0;
  }
`;

export const Table = styledComponentsTS(styledComponents.table)`
  width: 100%;
  padding: 5px 20px;
`;

export const RowData = styledComponents.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

export interface ITextProps {
  align?: string;
  alternativeColor?: boolean;
}

export const H1 = styledComponentsTS<ITextProps>(styledComponents.h1)`
  margin: 0;
  font-family: unset;
  font-size: 16px;
  font-style: bold;
  text-align: ${(props: ITextProps) => props.align || "center"};
  color: ${(props: ITextProps) => (props.alternativeColor ? "#e83f5d" : "#000")};
`;

export const H2 = styledComponentsTS<ITextProps>(styledComponents.h2)`
  margin: 0;
  font-family: unset;
  font-size: 12px;
  font-style: bold;
  width: 100%;
  text-align: ${(props: ITextProps) => props.align};
`;

export const ModalText = styledComponentsTS<ITextProps>(styledComponents.p)`
  font-family: unset;
  font-size: 14px;
  width: 100%;
  margin-top:8px;
  margin-bottom: 24px;
  text-align: ${(props: ITextProps) => props.align};
`;

export const P = styledComponentsTS<ITextProps>(styledComponents.p)`
  margin: 5px 0 0 0;
  padding: 0;
  font-family: unset;
  font-size: 12px;
  font-style: bold;
  justify-content: space-between;
  text-align: ${(props: ITextProps) => props.align || "center"};
`;

export const GradientButton = styledComponents.button`
  border-radius: 35px;
  color: #fff;
  padding: 10px 30px;
  background: linear-gradient(to right, rgba(248, 130, 61,1) 0%, rgba(232,63,93, 1) 100%);
  border: 0px;
  font-size:14px;
  font-weight: bold;
`;

export default List;
