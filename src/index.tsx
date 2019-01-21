import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import UserApp from "./components/App";
import PartnerApp from "./partner/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/user/" exact component={UserApp} />
      <Route path="/partner/" component={PartnerApp} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
