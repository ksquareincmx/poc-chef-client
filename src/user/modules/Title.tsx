import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";
import { Text } from './Text'

export const Title = styledComponentsTS(styledComponents.p)`
  font-size: 20px;
  margin: 0;
  color: #999999;
  font-weight: bold;
`;