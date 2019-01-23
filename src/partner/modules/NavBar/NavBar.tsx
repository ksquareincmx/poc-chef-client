import React, { MouseEvent } from "react";
import { NavBarContainer, Item, P, Selector } from "../ui/NavBar/NavBarUI";

interface INavBarProps {}
const T = true;
const NavBar = () => {
  return (
    <NavBarContainer>
      <Item selected={T}>
        <P selected={T}>Current Events</P>
        <Selector selected={T} />
      </Item>
      <Item selected={!T}>
        <P selected={!T}>Past Events</P>
        <Selector selected={!T} />
      </Item>
    </NavBarContainer>
  );
};

export default NavBar;
