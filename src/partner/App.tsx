import React, { useEffect } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { EventView, PastEventsView } from "./views";
import { CurrentEventsView } from "./views/CurrentEventView";
import { NotificationContext } from "../providers/";
import { currentEventsRoute, pastEventsRoute, eventViewRoute } from "./routes";
import { loginPartnerRoute } from "./routes/routes";
import { Login } from "src/common/views/login";
import { Splash } from "src/common/views/Splash";
import { loginService } from "src/common/services";

const PartnerApp: React.FC<RouteComponentProps> = ({ location, history }) => {
  // useEffect(() => {
  //   const isProtectedRoute = /\/partner\/[^login].+/gi.test(location.pathname);
  //   if (isProtectedRoute && !loginService.isUserLogged()) {
  //     history.push(loginPartnerRoute);
  //   }
  // }, []);

  return (
    <div>
      <NotificationContext.NotificationProvider>
        <Switch>
          <Route path={currentEventsRoute} component={CurrentEventsView} />
          <Route path={pastEventsRoute} component={PastEventsView} />
          <Route path={eventViewRoute} component={EventView} />
          <Route path={loginPartnerRoute} component={Login} />
          <Route path="/" component={Splash} />} />
        </Switch>
      </NotificationContext.NotificationProvider>
    </div>
  );
};

export default PartnerApp;
