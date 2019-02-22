import React from "react";
import { MenuItem } from "src/components/menuEvent/MenuItem/MenuItem";
import { MenuContainerStyled } from "src/components/menuEvent/MenuStyled";

export const MenuContainer: React.SFC<{}> = props => {
  console.log(props.children);
  return (
    <MenuContainerStyled>
      <MenuItem name="View Event" />
      <MenuItem name="Edit Event" />
    </MenuContainerStyled>
  );
};
