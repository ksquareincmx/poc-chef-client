import styledComponents from "styled-components";

export const CardContainer = styledComponents.div({
  boxShadow: "-2px 2px 10px #bdbdbd",
  background: "white",
  width: "100%",
  borderRadius: "10px",
  marginBottom: "10px",
  paddingBottom: "10px",
  boxSizing: "border-box"
});

export const RowDataContainer = styledComponents.div({
  width: "100%",
  padding: "5px 20px"
});
