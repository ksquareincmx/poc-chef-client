import React from "react";
import { NavLink } from "react-router-dom";
import { NavBarContainer, Item } from "src/partner/modules/ui/NavBar/NavBar";
import { NavBarStyled } from "src/partner/modules/ui";
import styledComponents from "styled-components";

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

export const Img = styledComponents.img({
  width: "2.5em",
  height: "2.5em",
  objectFit: "contain"
});

interface INavBarProps {
  user?: boolean;
}

export const NavBar: React.FC<INavBarProps> = props => {
  const [myOrders, setMyOrders] = React.useState("");
  const [order, setOrder] = React.useState("");
  const [history, setHistory] = React.useState("");

  const handleClick = (item: string) => () => {
    if (item === 'past-orders') {
      setMyOrders('');
      setOrder('');
      setHistory('-active');
    }

    if (item === 'order') {
      setMyOrders('');
      setOrder('-active');
      setHistory('');
    }

    if (item === 'my-orders') {
      setMyOrders('-active');
      setOrder('');
      setHistory('');
    }
  }

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
          to="/user/my-orders"
          activeStyle={NavBarActiveStyle}
          style={NavBarStyle}
          onClick={handleClick('my-orders')}
        >
          <Img src={require(`src/images/restaurant${myOrders}.svg`)} />
        </NavLink>
        <div />
      </NavBarStyled.Item>
      <NavBarStyled.Item>
        <NavLink
          to="/user/order"
          activeStyle={NavBarActiveStyle}
          style={NavBarStyle}
          onClick={handleClick('order')}
        >
          <Img src={require(`src/images/assignment${order}.svg`)} />
        </NavLink>
        <div />
      </NavBarStyled.Item>

      <NavBarStyled.Item>
        <NavLink
          to="/user/past-orders"
          activeStyle={NavBarActiveStyle}
          style={NavBarStyle}
          onClick={handleClick('past-orders')}
        >
          <Img src={require(`src/images/history-24px.svg`)} />
        </NavLink>
        <div />
      </NavBarStyled.Item>
    </NavBarStyled.NavBarContainer>
  );
};
