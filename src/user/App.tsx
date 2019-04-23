import React from "react";
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
  // useEffect(() => {
  //   const isProtectedRoute = /\/user\/[^login].+/gi.test(location.pathname);
  //   if (isProtectedRoute && !loginService.isUserLogged()) {
  //     history.push(loginUserRoute);
  //   }
  // }, []);
  const testRoute = new RegExp(`${loginUserRoute}|/`, "gi");
  const isSplashOrLoginRoute = testRoute.test(location.pathname);
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
      {!isSplashOrLoginRoute && <NavBar />}
    </div>
  );
};

export default UserApp;
