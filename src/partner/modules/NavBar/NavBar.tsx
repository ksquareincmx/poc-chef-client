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
  color: "Gray",
};

const NavBarActiveStyle = {
  ...NavBarStyle,
  color: "#E83E5D",
  background: "WhiteSmoke",
  fontStyle: "bold",
};

export const Img = styledComponents.img({
  width: "2.5em",
  height: "2.5em",
  objectFit: "contain",
});

interface INavBarProps {
  user?: boolean;
}

export const NavBar: React.FC<INavBarProps> = props => {
  let leftNav: any = "Current Events";
  let rightNav: any = "Past Events";
  let linkLeft = "/partner/current-events";
  let linkRight = "/partner/past-events";
  const [rightState, setRightState] = React.useState("");
  const [leftState, setLeftState] = React.useState("");

  if (props.user) {
    leftNav = <Img src={require(`src/images/assignment${leftState}.svg`)} />;
    rightNav = <Img src={require(`src/images/restaurant${rightState}.svg`)} />;
    linkLeft = "/user/my-events";
    linkRight = "/user/order";
  }

  const handleClickRight = () => {
    setRightState("-active");
    setLeftState("");
  };

  const handleClickLeft = () => {
    setLeftState("-active");
    setRightState("");
  };

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
          to={linkLeft}
          activeStyle={NavBarActiveStyle}
          style={NavBarStyle}
          onClick={handleClickLeft}
        >
          {leftNav}
        </NavLink>
        <div />
      </NavBarStyled.Item>
      <NavBarStyled.Item>
        <NavLink
          to={linkRight}
          activeStyle={NavBarActiveStyle}
          style={NavBarStyle}
          onClick={handleClickRight}
        >
          {rightNav}
        </NavLink>
        <div />
      </NavBarStyled.Item>
    </NavBarStyled.NavBarContainer>
  );
};
