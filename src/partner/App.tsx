import React from "react";
import { Route, Switch } from "react-router-dom";
import CurrentEventsView from "./views/CurrentEventsView";
import NavBar from "./modules/NavBar";
import PastEventsView from "./views/PastEventsView";

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
      </Switch>
      <NavBar />
    </div>
  );
};

export default PartnerApp;
