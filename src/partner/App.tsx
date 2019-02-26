import React from "react";
import { Route, Switch } from "react-router-dom";
import { CurrentEventsView, EventView, PastEventsView } from "./views";
import { NavBar } from "./modules/NavBar";
import { NotificationContext } from "../providers/";

interface IPartnerAppProps {
  match: {
    url: string;
  };
}

const PartnerApp: React.SFC<IPartnerAppProps> = props => {
  return (
    <div>
      <NotificationContext.NotificationProvider>
        <Switch>
          <Route path={`${props.match.url}/current-events`} component={CurrentEventsView} />
          <Route path={`${props.match.url}/past-events`} component={PastEventsView} />
          <Route path={`${props.match.url}/events/:id`} component={EventView} />
        </Switch>
      </NotificationContext.NotificationProvider>
      <NavBar />
    </div>
  );
};

export default PartnerApp;
