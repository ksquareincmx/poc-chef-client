import React, { useState } from "react";
import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";

export const MenuOptionsWrapper = styledComponents.div`
  position: relative;
  display: inline-block;
  text-align: right;
`;

export const ImgMenu = styledComponents.img({
  width: "1.5em",
  height: "1.5em",
  padding: "0",
  objectFit: "contain"
});

export interface IMenuOptionsContent {
  show?: boolean;
}

export const MenuOptionsContent = styledComponentsTS<IMenuOptionsContent>(styledComponents.div)`
  display: ${(props: IMenuOptionsContent) => (props.show ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: -20px;
  top: 33.5px;
  text-align: left;
  & > a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
  & > a:hover {
    background-color: #ddd;

  }
`;

export const MenuOptions: React.SFC = props => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <MenuOptionsWrapper>
      <ImgMenu
        onClick={showMenuHandler}
        src={require("../../../images/menu-icon.png")}
        alt="options"
      />
      <MenuOptionsContent show={showMenu}>{props.children}</MenuOptionsContent>
    </MenuOptionsWrapper>
  );
};
