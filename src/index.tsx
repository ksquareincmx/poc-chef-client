import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import PartnerApp from "./partner/App";
import { CreateEvent } from "./partner/modules/Event/";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route path="/partner/" exact component={PartnerApp} />
      <Route path="/partner/add/:param" exact component={CreateEvent} />
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
