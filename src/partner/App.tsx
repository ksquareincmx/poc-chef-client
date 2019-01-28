import React from "react";
import { Route, Switch } from "react-router-dom";
import CurrentEventsView from "./views/CurrentEventsView";
import Header from "./modules/Header";
import NavBar from "./modules/NavBar";

interface IPartnerAppProps {
  match: {
    url: string;
  };
}

const PartnerApp: React.SFC<IPartnerAppProps> = props => {
  return (
    <div>
      <Header title="New Event" />
      <Switch>
        <Route
          path={`${props.match.url}/current-events`}
          component={CurrentEventsView}
        />
        <Route
          path={`${props.match.url}/past-events`}
          component={CurrentEventsView}
        />
      </Switch>
      <NavBar />
    </div>
  );
};

export default PartnerApp;
