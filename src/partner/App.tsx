import React from "react";
import { Route, Switch } from "react-router-dom";
import { EventView, PastEventsView } from "./views";
import { CurrentEventsView } from "./views/CurrentEventView";
import { NavBar } from "./modules/NavBar";
import { NotificationContext } from "../providers/";
import { IReactRouterProps } from "src/common/interfaces";
import { currentEventsRoute, pastEventsRoute, eventViewRoute } from "./routes";

const PartnerApp: React.SFC<IReactRouterProps> = props => {
  return (
    <div>
      <NotificationContext.NotificationProvider>
        <Switch>
          <Route path={currentEventsRoute} component={CurrentEventsView} />
          <Route path={pastEventsRoute} component={PastEventsView} />
          <Route path={eventViewRoute} component={EventView} />
        </Switch>
      </NotificationContext.NotificationProvider>
      <NavBar />
    </div>
  );
};

export default PartnerApp;
