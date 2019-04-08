import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { EventView, PastEventsView } from "./views";
import { CurrentEventsView } from "./views/CurrentEventView";
import { NotificationContext } from "../providers/";
import { IReactRouterProps } from "src/common/interfaces";
import { currentEventsRoute, pastEventsRoute, eventViewRoute } from "./routes";
import { loginPartnerRoute } from "./routes/routes";
import { Login } from "src/common/views/login";

const PartnerApp: React.SFC<IReactRouterProps> = props => {
  return (
    <div>
      <NotificationContext.NotificationProvider>
        <Switch>
          <Route path={currentEventsRoute} component={CurrentEventsView} />
          <Route path={pastEventsRoute} component={PastEventsView} />
          <Route path={eventViewRoute} component={EventView} />
          <Route path={loginPartnerRoute} component={Login} />
          <Route path="/" component={() => <Redirect to={loginPartnerRoute} />} />
        </Switch>
      </NotificationContext.NotificationProvider>
    </div>
  );
};

export default PartnerApp;
