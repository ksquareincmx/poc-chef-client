import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styledComponents from "styled-components";
import { NavBarContainer, NavBarItem } from "src/user/modules/ui/NavBar";
import {
  USER_EVENTS_ROUTE,
  USER_MY_ORDERS_ROUTE,
  USER_PROFILE_ROUTE,
  USER_HISTORY_ROUTE,
} from "src/user/routes";

const NavBarStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

const NavBarActiveStyle = {
  ...NavBarStyle,
  background: "white",
};

const Img = styledComponents.img({
  width: "1.5rem",
  height: "1.5rem",
  objectFit: "contain",
});

interface INavBarProps {
  location?: any;
}

export const NavBar: React.FC<INavBarProps> = ({ location }) => {
  const [myOrders, setMyOrders] = useState("");
  const [order, setOrder] = useState("");
  const [history, setHistory] = useState("");

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/user/past-events") {
      setMyOrders("");
      setOrder("");
      setHistory("-active");
    }

    if (pathname === USER_EVENTS_ROUTE) {
      setMyOrders("");
      setOrder("-active");
      setHistory("");
    }

    if (pathname === USER_MY_ORDERS_ROUTE) {
      setMyOrders("-active");
      setOrder("");
      setHistory("");
    }

    if (pathname === USER_PROFILE_ROUTE) {
      setMyOrders("");
      setOrder("");
      setHistory("");
    }
  }, [location]);

  return (
    <NavBarContainer>
      <NavBarItem>
        <style>
          {".active + div {" +
            "margin: 0;" +
            "padding: 0;" +
            "height: 6px;" +
            "width: 100%;" +
            "background: linear-gradient(to right, #E83E5D, #F8823D);" +
            "}"}
        </style>
        <NavLink to={USER_MY_ORDERS_ROUTE} activeStyle={NavBarActiveStyle} style={NavBarStyle}>
          <Img src={require(`src/images/restaurant-menu${myOrders}.svg`)} />
        </NavLink>
        <div />
      </NavBarItem>
      <NavBarItem>
        <NavLink to={USER_EVENTS_ROUTE} activeStyle={NavBarActiveStyle} style={NavBarStyle}>
          <Img src={require(`src/images/icons/assignment${order}.svg`)} />
        </NavLink>
        <div />
      </NavBarItem>
      <NavBarItem>
        {/* Create past-events page */}
        <NavLink to={USER_HISTORY_ROUTE} activeStyle={NavBarActiveStyle} style={NavBarStyle}>
          <Img src={require(`src/images/icons/history${history}.svg`)} />
        </NavLink>
        <div />
      </NavBarItem>
    </NavBarContainer>
  );
};
