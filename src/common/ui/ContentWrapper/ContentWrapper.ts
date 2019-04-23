import styled from "styled-components";
import styledTS from "styled-components-ts";

interface IContentWrapper {
  height?: string;
}

export const ContentWrapper = styledTS<IContentWrapper>(styled.div)`
  width: 100vw;
  height: calc(100vh - ${({ height }) => height || "9rem"});
  overflow-y: auto;
`;

export const FloatContentWrapper = styled(ContentWrapper)`
  position: relative;
  top: -1rem;
  height: calc(100vh - ${({ height }) => height || "8rem"});
`;
