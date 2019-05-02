import styled from "styled-components";
import styledTS from "styled-components-ts";
import { CardRow } from "src/common/ui/Card";
import { TextTable } from "src/common/ui/Text";

export const UnitsContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1rem 2.5rem 1rem;
`;
export const Icons = styled.img`
  width: 1rem;
  height: 1rem;
  margin: auto 0px;
`;
export const InputUnits = styled.input`
  width: 2.5rem;
  height: 2rem;
  box-sizing: border-box;
  text-align: center;
`;
export const DivWrapper = styled.div`
  clip-path: inset(-1px);
`;

export const CustomProductRow = styled(CardRow)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 5.5rem 0px;
  grid-gap: 0.125rem;
`;

interface ITextTable {
  textAlign?: string;
}
export const TextTableProduct = styledTS<ITextTable>(styled(TextTable))`
  margin: auto 0px;
  text-align :${({ textAlign }) => textAlign || "center"};
`;

export const ExtraButtonDivRelative = styled.div`
  position: relative;
  right: -1rem;
`;
export const ExtraButtonInnerDivAbsolute = styled.div`
  position: absolute;
  height: 3.125rem;
  top: -0.4875rem;
  display: flex;
  background: #ff6200;
`;

export const DivDelete = styled.div`
  width: 1rem;
  height: 1rem;
  background-image: url(${require("src/images/icons/delete_white.svg")});
  background-size: 1rem;
  margin: auto 0px auto 1rem;
`;
