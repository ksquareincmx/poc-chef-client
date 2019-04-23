import styled from "styled-components";
import styledTS from "styled-components-ts";

export const ContentWrapper = styledTS(styled.div)`
  width: 100vw;
  height: calc(100vh - 13rem);
  overflow-y: auto;
`;

export const FloatContentWrapper = styled(ContentWrapper)`
  position: relative;
  top: -1rem;
  height: calc(100vh - 8rem);
`;
