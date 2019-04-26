import React, { useEffect } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { NotificationContext } from "../providers/";
import { currentEventsRoute, pastEventsRoute, eventDetailsRoute } from "./routes";
import { loginPartnerRoute, eventCreateRoute } from "./routes/routes";
import { Login } from "./views/Login";
import { Splash } from "src/common/views/Splash";
import { loginService } from "src/common/services";
import { NavBar } from "./modules/NavBar";
import { CurrentEvents } from "./views/CurrentEvents";
import { CreateEvent } from "./views/CreateEvent";
import { EventDetails } from "./views/EventDetails";
import { PastEvents } from "./views/PastEvents";

const PartnerApp: React.FC<RouteComponentProps> = ({ location, history }) => {
  const isProtectedRoute = /\/partner\/[^login].+/gi.test(location.pathname);
  // useEffect(() => {
  //   if (isProtectedRoute && !loginService.isUserLogged()) {
  //     history.push(loginPartnerRoute);
  //   }
  // }, []);

  return (
    <div>
      <NotificationContext.NotificationProvider>
        <Switch>
          <Route path={currentEventsRoute} component={CurrentEvents} />
          <Route path={pastEventsRoute} component={PastEvents} />
          <Route path={eventDetailsRoute} component={EventDetails} />
          <Route path={eventCreateRoute} component={CreateEvent} />
          <Route path={loginPartnerRoute} component={Login} />
          <Route path="/" component={Splash} />} />
        </Switch>
        {isProtectedRoute && <NavBar />}
      </NotificationContext.NotificationProvider>
    </div>
  );
};

export default PartnerApp;
