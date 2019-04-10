import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch,NotFoundRoute } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.3.0";

// pages for this produ
import LandingPage from "views/LandingPage/LandingPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import ErrorPage from "views/ErrorPage/ErrorPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/city/:city" component={SignupPage} />
      <Route path="/" component={LandingPage} />
      <Route path="*" component={ErrorPage} />
  
    </Switch>
  </Router>,
  document.getElementById("root")
);
