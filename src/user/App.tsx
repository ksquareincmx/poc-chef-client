import React from "react";
import { Route, Switch } from "react-router-dom";
import { Profile } from "./views/Profile/";
import { IReactRouterProps } from "src/common/interfaces";
import { NavBar } from "src/partner/modules/NavBar";

const UserApp: React.SFC<IReactRouterProps> = props => {
  return (
    <div>
      <Switch>
        <Route path={`${props.match.url}/profile`} component={Profile} />
      </Switch>
    </div>
  );
};

export default UserApp;
