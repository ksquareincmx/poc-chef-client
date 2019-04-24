import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styledComponents from "styled-components";
import { NavBarContainer, NavBarItem } from "src/user/modules/ui/NavBar";
import { profileUserRoute, myOrdersUserRoute, orderFormUserRoute } from "src/user/routes";

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

    if (pathname === orderFormUserRoute) {
      setMyOrders("");
      setOrder("-active");
      setHistory("");
    }

    if (pathname === myOrdersUserRoute) {
      setMyOrders("-active");
      setOrder("");
      setHistory("");
    }

    if (pathname === profileUserRoute) {
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
        <NavLink to="/user/my-orders" activeStyle={NavBarActiveStyle} style={NavBarStyle}>
          <Img src={require(`src/images/icons/restaurant-menu${myOrders}.svg`)} />
        </NavLink>
        <div />
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/user/order" activeStyle={NavBarActiveStyle} style={NavBarStyle}>
          <Img src={require(`src/images/icons/assignment${order}.svg`)} />
        </NavLink>
        <div />
      </NavBarItem>
      <NavBarItem>
        {/* Create past-events page */}
        <NavLink to="/user/past-events" activeStyle={NavBarActiveStyle} style={NavBarStyle}>
          <Img src={require(`src/images/icons/history${history}.svg`)} />
        </NavLink>
        <div />
      </NavBarItem>
    </NavBarContainer>
  );
};
