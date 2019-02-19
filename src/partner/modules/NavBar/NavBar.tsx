import React from "react";
import { NavBarStyled } from "../ui";
import { NavLink } from "react-router-dom";

const NavBarStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "44px",
  fontFamily: "unset",
  fontSize: "14px",
  textDecoration: "none",
  color: "Gray"
};

const NavBarActiveStyle = {
  ...NavBarStyle,
  color: "#E83E5D",
  background: "WhiteSmoke",
  fontStyle: "bold"
};

export const NavBar = () => {
  return (
    <NavBarStyled.NavBarContainer>
      <NavBarStyled.Item>
        <style>
          {".active + div{" +
            "margin: 0;" +
            "padding: 0;" +
            "height: 6px;" +
            "width: 100%;" +
            "background: linear-gradient(to right, #E83E5D, #F8823D);" +
            "}"}
        </style>
        <NavLink
          to="/partner/current-events"
          activeStyle={NavBarActiveStyle}
          style={NavBarStyle}
        >
          Current Events
        </NavLink>
        <div />
      </NavBarStyled.Item>
      <NavBarStyled.Item>
        <NavLink
          to="/partner/past-events"
          activeStyle={NavBarActiveStyle}
          style={NavBarStyle}
        >
          Past Events
        </NavLink>
        <div />
      </NavBarStyled.Item>
    </NavBarStyled.NavBarContainer>
  );
};
