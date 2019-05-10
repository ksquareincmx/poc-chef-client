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
import { Location } from "history";

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

const GradientLine = styledComponents.div`
  margin: 0;
  padding: 0;
  height: 6px;
  width: 100%;
  background: linear-gradient(to right, #E83E5D, #F8823D);
`;

interface INavBarProps {
  location: Location;
}

export const NavBar: React.FC<INavBarProps> = ({ location }) => {
  const [myOrders, setMyOrders] = useState("");
  const [order, setOrder] = useState("");
  const [history, setHistory] = useState("");

  useEffect(() => {
    const { pathname } = location;

    const isOrderEditRoute = /order-edit/gi.test(pathname);

    if (pathname === USER_HISTORY_ROUTE) {
      setMyOrders("");
      setOrder("");
      setHistory("-active");
    }

    if (pathname === USER_EVENTS_ROUTE) {
      setMyOrders("");
      setOrder("-active");
      setHistory("");
    }

    if (pathname === USER_MY_ORDERS_ROUTE || isOrderEditRoute) {
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
        <NavLink to={USER_MY_ORDERS_ROUTE} activeStyle={NavBarActiveStyle} style={NavBarStyle}>
          <Img src={require(`src/images/restaurant-menu${myOrders}.svg`)} />
        </NavLink>
        {myOrders && <GradientLine />}
      </NavBarItem>
      <NavBarItem>
        <NavLink to={USER_EVENTS_ROUTE} activeStyle={NavBarActiveStyle} style={NavBarStyle}>
          <Img src={require(`src/images/icons/assignment${order}.svg`)} />
        </NavLink>
        {order && <GradientLine />}
      </NavBarItem>
      <NavBarItem>
        <NavLink to={USER_HISTORY_ROUTE} activeStyle={NavBarActiveStyle} style={NavBarStyle}>
          <Img src={require(`src/images/icons/history${history}.svg`)} />
        </NavLink>
        {history && <GradientLine />}
      </NavBarItem>
    </NavBarContainer>
  );
};
