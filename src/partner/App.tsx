import React from "react";
import { Route, Switch } from "react-router-dom";
import { CurrentEventsView, EventView, PastEventsView } from "./views";
import { NavBar } from "./modules/NavBar";

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
        <Route path={`${props.match.url}/events/:id`} component={EventView} />
      </Switch>
      <NavBar />
    </div>
  );
};

export default PartnerApp;
