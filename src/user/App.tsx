import React from "react";
import { Route, Switch } from "react-router-dom";
import { Profile } from "./views/Profile/";
import { IReactRouterProps } from "src/common/interfaces";
import { NavBar } from "src/partner/modules/NavBar";
import { MyOrders } from "src/user/views/MyOrders";
import { Order } from "src/user/views/Order";

const UserApp: React.SFC<IReactRouterProps> = props => {
  return (
    <div>
      <Switch>
        <Route path={`${props.match.url}/profile`} component={Profile} />
        <Route path={`${props.match.url}/my-orders`} component={MyOrders} />
        <Route path={`${props.match.url}/order`} component={Order} />
      </Switch>
      <NavBar user={true} />
    </div>
  );
};

export default UserApp;
