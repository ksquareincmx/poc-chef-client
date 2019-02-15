import React from "react";
import { Route, Switch } from "react-router-dom";
import CurrentEventsView from "./views/CurrentEventsView";
import NavBar from "./modules/NavBar";
import PastEventsView from "./views/PastEventsView";
import EventView from "./views/EventView";

interface IPartnerAppProps {
  match: {
    url: string;
  };
}

const PartnerApp: React.SFC<IPartnerAppProps> = props => {
  return (
    <div>
      <Switch>
        <Route
          path={`${props.match.url}/current-events`}
          component={CurrentEventsView}
        />
        <Route
          path={`${props.match.url}/past-events`}
          component={PastEventsView}
        />
        <Route
          path={`${props.match.url}/events/:id`}
          component={EventView}
        />
      </Switch>
      <NavBar />
    </div>
  );
};

export default PartnerApp;
