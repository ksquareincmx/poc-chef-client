import React, { useState, useEffect } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { ProfileView } from "./views/Profile/";
import { NavBar } from "src/user/modules/Navbar";
import { MyOrders } from "src/user/views/MyOrders";
import { OrderEdit } from "src/user/views/OrderEdit";
import { EditProfileView } from "src/user/views/EditProfile";
import { Splash } from "src/common/views/Splash";
import { Login } from "./views/Login";
import {
  USER_PROFILE_ROUTE,
  USER_EDIT_PROFILE_ROUTE,
  USER_MY_ORDERS_ROUTE,
  USER_ORDER_EDIT_ROUTE,
  USER_LOGIN_ROUTE,
  USER_EVENTS_ROUTE,
  USER_HISTORY_ROUTE,
} from "./routes";
import { Events } from "./views/Events";
import { NotificationContext } from "src/providers";
import { HistoryOrders } from "./views/HistoryOrders";

const UserApp: React.SFC<RouteComponentProps> = ({ location }) => {
  const [isSplashOrLoginRoute, setIsSplashOrLoginRoute] = useState(false);

  useEffect(() => {
    const testRoute = new RegExp(`${USER_LOGIN_ROUTE}|/user(?!.)`, "gi");
    const isProtectedRoute = testRoute.test(location.pathname);
    setIsSplashOrLoginRoute(isProtectedRoute);
  }, [location]);

  return (
    <React.Fragment>
      <NotificationContext.NotificationProvider>
        <Switch>
          <Route path={USER_EDIT_PROFILE_ROUTE} component={EditProfileView} />
          <Route path={USER_PROFILE_ROUTE} component={Profile} />
          <Route path={USER_MY_ORDERS_ROUTE} component={MyOrders} />
          <Route path={USER_ORDER_EDIT_ROUTE} component={OrderEdit} />
          <Route path={USER_LOGIN_ROUTE} component={Login} />
          <Route path={USER_EVENTS_ROUTE} component={Events} />
          <Route path={USER_HISTORY_ROUTE} component={HistoryOrders} />
          <Route path="/" component={Splash} />
        </Switch>
        {!isSplashOrLoginRoute && <NavBar location={location} />}
      </NotificationContext.NotificationProvider>
    </React.Fragment>
  );
};

export default UserApp;
