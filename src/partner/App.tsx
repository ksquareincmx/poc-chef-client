import React from "react";
import { Route, Switch } from "react-router-dom";
import { EventView, PastEventsView } from "./views";
import { CurrentEventsView } from "./views/CurrentEventView";
import { NavBar } from "./modules/NavBar";
import { NotificationContext } from "../providers/";
import { IReactRouterProps } from "src/common/interfaces";

const PartnerApp: React.SFC<IReactRouterProps> = props => {
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
