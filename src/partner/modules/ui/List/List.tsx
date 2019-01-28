import styledComponents from "styled-components";
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
  marginTop: "-25px",
  padding: "0 15px 70px 15px",
  height: "100%",
  overflowY: "auto"
});

export interface IListItemRowProps {
  borderBottom?: boolean;
}
export const ListItemRow = styledComponentsTS<IListItemRowProps>(
  styledComponents.div
)`
  width: 100%;
  padding: 5px 20px 5px 20px;
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
}
export const H1 = styledComponentsTS<ITextProps>(styledComponents.h1)`
  margin: 0;
  font-family: unset;
  font-size: 16px;
  font-style: bold;
  text-align: ${(props: ITextProps) => props.align || "center"};
`;

export const H2 = styledComponentsTS<ITextProps>(styledComponents.h2)`
  margin: 0;
  font-family: unset;
  font-size: 12px;
  font-style: bold;
  width: 100%;
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

export const ImgMenu = styledComponents.img({
  width: "1.5em",
  height: "1.5em",
  padding: "0",
  objectFit: "contain"
});

export default List;
