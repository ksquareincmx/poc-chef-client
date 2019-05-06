import React, { useState, useEffect } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { ProfileView } from "./views/Profile/";
import { NavBar } from "src/user/modules/Navbar";
import { MyOrders } from "src/user/views/MyOrders";
import { Order } from "src/user/views/Order";
import { EditProfileView } from "src/user/views/EditProfile";
import {
  profileUserRoute,
  myOrdersUserRoute,
  orderViewUserRoute,
  USER_EDIT_PROFILE_ROUTE,
} from "./routes";
import { orderFormUserRoute, loginUserRoute } from "./routes/routes";
import { Splash } from "src/common/views/Splash";
import { Login } from "./views/Login";

const UserApp: React.SFC<RouteComponentProps> = ({ location, history }) => {
  const [isSplashOrLoginRoute, setIsSplashOrLoginRoute] = useState(false);

  useEffect(() => {
    const testRoute = new RegExp(`${loginUserRoute}|/user(?!.)`, "gi");
    const isProtectedRoute = testRoute.test(location.pathname);
    setIsSplashOrLoginRoute(isProtectedRoute);
  }, [location]);

  return (
    <div>
      <Switch>
        <Route path={USER_EDIT_PROFILE_ROUTE} component={EditProfileView} />
        <Route path={profileUserRoute} component={ProfileView} />
        <Route path={myOrdersUserRoute} component={MyOrders} />
        <Route path={loginUserRoute} component={Login} />
        <Route path={orderViewUserRoute} component={Order} />
        <Route path={orderFormUserRoute} component={Order} />
        <Route path="/" component={Splash} />
      </Switch>
      {!isSplashOrLoginRoute && <NavBar location={location} />}
    </div>
  );
};

export default UserApp;
