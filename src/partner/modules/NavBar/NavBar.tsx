import React, { MouseEvent } from "react";
import { NavBarContainer, Item, P, Selector } from "../ui/NavBar/NavBar";
import { NavLink } from "react-router-dom";

interface INavBarProps {}
const NavBar = () => {
  return (
    <NavBarContainer>
      <Item>
        <P>
          <NavLink
            to="/partner/current-events"
            activeStyle={{
              fontFamily: "inherity",
              color: "inherity",
              textDecoration: "inherity"
            }}
          >
            Current Events
          </NavLink>
        </P>
      </Item>
      <Item>
        <P>
          <NavLink
            to="/partner/past-events"
            activeStyle={{
              fontFamily: "inherity",
              color: "inherity",
              textDecoration: "inherity"
            }}
          >
            Past Events
          </NavLink>
        </P>
      </Item>
    </NavBarContainer>
  );
};

export default NavBar;

{
  /* <Item>
        <P>Current Events</P>
        <Selector />
      </Item>
      <Item>
        <P>Past Events</P>
        <Selector />
      </Item> */
}
