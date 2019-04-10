import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";

export const RowProducts = styledComponentsTS(styledComponents.div)`
   display: grid;
   grid-template-columns: 2fr 1fr 1fr;
   border-bottom: 2px solid #f3f3f3;
   padding: 0.5rem 0.75rem;
   box-sizing: border-box;
`;

export const RowTitle = styledComponentsTS(styledComponents.div)`
   display: grid;
   grid-template-columns: 1fr 1fr 15px;
`;

export interface ICell {
  align?: string;
  fontWeight?: string;
}

export const Cell = styledComponentsTS<ICell>(styledComponents.div)`
   display: flex;
   justify-content: ${({ align }) => (align ? align : "left")};
   font-weight: ${({ fontWeight }) => fontWeight || "auto"};
`;
