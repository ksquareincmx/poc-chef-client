import React from "react";
import { MenuContainerStyled, MenuItemStyled } from "../MenuStyled";

interface IMenuProps {
  name: string;
}

export const MenuItem: React.SFC<IMenuProps> = props => {
  return <MenuItemStyled>{props.name}</MenuItemStyled>;
};
