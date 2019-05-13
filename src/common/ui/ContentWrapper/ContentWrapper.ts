import styled from "styled-components";
import styledTS from "styled-components-ts";

interface IContentWrapper {
  height?: string;
}

export const ContentWrapper = styledTS<IContentWrapper>(styled.div)`
  width: 100%;
  height: ${({ height }) => height || "calc(100vh - 9rem)"};
  overflow-y: auto;
  overflow-x: hidden;
`;

export const FloatContentWrapper = styled(ContentWrapper)`
  position: relative;
  top: -1rem;
  z-index: 2;
  height: ${({ height }) => height || "calc(100vh - 8rem)"};
`;
