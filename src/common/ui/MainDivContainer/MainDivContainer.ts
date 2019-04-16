import styledComponents from "styled-components";
import stylesComponentsTS from "styled-components-ts";

export interface IMainDivContainerProps {
  partner?: boolean;
  user?: boolean;
}

export const MainDivContainer = stylesComponentsTS<IMainDivContainerProps>(styledComponents.div)`
  height: 100vh;
  width: 100vw;
  ${({ user }) => user && `background-image: linear-gradient(to bottom, #e83e5d, #f8823d)`};
  ${({ partner }) => partner && `background-color: #999`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
`;

export const ImgLogo = styledComponents.img({
  minWidth: "264px",
  minHeight: "98px",
});

export const AdminSite = stylesComponentsTS(styledComponents.p)`
font-family: Roboto;
font-size: 16px;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
color: #ffffff;
margin: 0px;
`;
