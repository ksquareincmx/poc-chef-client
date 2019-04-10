import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import PartnerApp from "./partner/App";
import UserApp from "./user/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { rootRoute, userRoute, partnerRoute } from "./common/routes";
import "dotenv/config";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path={partnerRoute} component={PartnerApp} />
      <Route path={userRoute} component={UserApp} />
      <Route route={rootRoute} component={() => <Redirect to={userRoute} />} />
    </Switch>
  </Router>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
