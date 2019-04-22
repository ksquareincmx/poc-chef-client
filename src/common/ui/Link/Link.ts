import styledComponents from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styledComponents(Link)`
    text-decoration: none;
    color: #fff; 
    font-size: 16px;
    font-family: Roboto;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;


    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
