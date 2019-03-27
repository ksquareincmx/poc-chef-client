import React from "react";
import { Route, Switch } from "react-router-dom";
import { Profile } from "./views/Profile/";
import { IReactRouterProps } from "src/common/interfaces";
import { NavBar } from "src/partner/modules/NavBar";
import { MyOrders } from "src/user/views/MyOrders";
import { Order } from "src/user/views/Order";
import { profileUserRoute, myOrdersUserRoute, orderViewUserRoute } from "./routes";
import { orderFormUserRoute } from "./routes/routes";

const UserApp: React.SFC<IReactRouterProps> = props => {
  return (
    <div>
      <Switch>
        <Route path={profileUserRoute} component={Profile} />
        <Route path={myOrdersUserRoute} component={MyOrders} />
        <Route path={orderViewUserRoute} component={Order} />
        <Route path={orderFormUserRoute} component={Order} />
      </Switch>
      <NavBar user={true} />
    </div>
  );
};

export default UserApp;
