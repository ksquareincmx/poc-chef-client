import styledComponents from "styled-components";
import styledComponentsTs from "styled-components-ts";

export const Picture = styledComponentsTs(styledComponents.img)`
    height: 8rem;
    margin: 2rem 0;
    object-fit: contain;
    width: 8rem;
`;