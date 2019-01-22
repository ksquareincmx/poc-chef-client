import styled from "@emotion/styled";

export const EventContainer = styled.div({
  boxShadow: "-2px 2px 10px #bdbdbd",
  background: "white",
  width: "100%",
  borderRadius: "10px",
  marginBottom: "10px"
});

export const H1 = styled.h1({
  margin: "0",
  fontFamily: "unset",
  fontSize: "16px",
  fontStyle: "bold"
});

const H2 = {
  margin: "0",
  fontFamily: "unset",
  fontSize: "12px",
  fontStyle: "bold",
  width: "100%"
};

export const H2Left = styled.h2({
  ...H2,
  textAlign: "left"
});

export const H2Center = styled.h2({
  ...H2,
  textAlign: "center"
});

export const H2Right = styled.h2({
  ...H2,
  textAlign: "right"
});

const RowDataContainer = {
  width: "100%",
  padding: "5px 20px"
};
export const RowDataContainerBordeBottom = styled.div({
  ...RowDataContainer,
  borderBottom: "2px solid #f3f3f3"
});

export const RowDataContainerBorderLess = styled.div({
  ...RowDataContainer
});

export const TableContainer = styled.table({
  width: "100%",
  padding: "5px 20px"
});
export const TableHead = styled.thead({
  width: "100%",
  padding: "5px 20px",
  borderBottom: "2px solid #f3f3f3"
});

export const TableFoot = styled.tfoot({
  width: "100%",
  padding: "5px 20px",
  borderTop: "2px solid #f3f3f3"
});

export const RowData = styled.div({
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between"
});

const EventRowItem = {
  margin: "0",
  padding: "0",
  fontFamily: "unset",
  fontSize: "12px",
  fontStyle: "bold",
  justifyContent: "space-between"
};

export const EventRowItemLeft = styled.p({
  ...EventRowItem,
  textAlign: "left"
});

export const EventRowItemCenter = styled.p({
  ...EventRowItem,
  textAlign: "center"
});

export const EventRowItemRight = styled.p({
  ...EventRowItem,
  textAlign: "right"
});