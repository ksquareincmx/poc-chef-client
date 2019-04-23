import React, { useState, useEffect } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { Profile } from "./views/Profile/";
import { NavBar } from "src/user/modules/Navbar";
import { MyOrders } from "src/user/views/MyOrders";
import { Order } from "src/user/views/Order";
import { profileUserRoute, myOrdersUserRoute, orderViewUserRoute } from "./routes";
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
        <Route path={profileUserRoute} component={Profile} />
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
