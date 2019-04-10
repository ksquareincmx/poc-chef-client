import React, { useEffect } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { Profile } from "./views/Profile/";
import { NavBar } from "src/partner/modules/NavBar";
import { MyOrders } from "src/user/views/MyOrders";
import { Order } from "src/user/views/Order";
import { profileUserRoute, myOrdersUserRoute, orderViewUserRoute } from "./routes";
import { orderFormUserRoute, loginUserRoute } from "./routes/routes";
import { Splash } from "src/common/views/Splash";
import { loginService } from "src/common/services";

const UserApp: React.SFC<RouteComponentProps> = ({ location, history }) => {
  useEffect(() => {
    const isProtectedRoute = /\/user\/[^login].+/gi.test(location.pathname);
    if (isProtectedRoute && !loginService.isUserLogged()) {
      history.push(loginUserRoute);
    }
  }, []);

  return (
    <div>
      <Switch>
        <Route path={profileUserRoute} component={Profile} />
        <Route path={myOrdersUserRoute} component={MyOrders} />
        <Route path={orderViewUserRoute} component={Order} />
        <Route path={orderFormUserRoute} component={Order} />
        <Route path="/" component={Splash} />
      </Switch>
      <NavBar user={true} />
    </div>
  );
};

export default UserApp;
