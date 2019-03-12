import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./views//Profile";
import { NavBar } from "src/partner/modules/NavBar";

interface IUserAppProps {
  match: {
    url: string;
  };
}

const UserApp: React.SFC<IUserAppProps> = props => {
  return (
    <div>
      <Switch>
        <Route path={`${props.match.url}/profile`} component={Profile} />
      </Switch>
    </div>
  );
};

export default UserApp;
