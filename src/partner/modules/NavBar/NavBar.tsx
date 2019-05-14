import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavBarStyled } from "src/partner/modules/ui";
import styledComponents from "styled-components";
import { currentEventsRoute, pastEventsRoute } from "src/partner/routes";
import { Location } from "history";
import { TextMessage } from "src/common/ui/Text";

const NavBarStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "2.5rem",
  fontFamily: "unset",
  fontSize: ".875rem",
  textDecoration: "none",
  color: "Gray",
};

export const Img = styledComponents.img({
  width: "1.5rem",
  height: "1.5rem",
  objectFit: "contain",
});

const Text = styledComponents(TextMessage)`
  font-size: .875rem;
  font-weight: normal;
  line-height: 1.71;
`;
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
  const [currentEvents, setCurrentEvents] = useState("");
  const [pastEvents, setPastEvents] = useState("");

  useEffect(() => {
    const { pathname } = location;
    const isPastRoute = pathname.match(/past/gi);

    setCurrentEvents(!isPastRoute ? "-active" : "");
    setPastEvents(isPastRoute ? "-active" : "");
  }, [location.pathname]);

  const activeCurrentStyles = currentEvents ? { color: "#E83E5D" } : {};
  const activePastStyles = pastEvents ? { color: "#E83E5D" } : {};

  return (
    <NavBarStyled.NavBarContainer>
      <NavBarStyled.Item>
        <NavLink to={currentEventsRoute} style={NavBarStyle}>
          <Img src={require(`src/images/icons/history${currentEvents}.svg`)} />{" "}
          <Text {...activeCurrentStyles}>Current Events</Text>
        </NavLink>
        {currentEvents && <GradientLine />}
      </NavBarStyled.Item>
      <NavBarStyled.Item>
        <NavLink to={pastEventsRoute} style={NavBarStyle}>
          <Img src={require(`src/images/icons/assignment${pastEvents}.svg`)} />{" "}
          <Text {...activePastStyles}>Past Events</Text>
        </NavLink>
        {pastEvents && <GradientLine />}
      </NavBarStyled.Item>
    </NavBarStyled.NavBarContainer>
  );
};
