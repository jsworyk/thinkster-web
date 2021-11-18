import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../screens/auth/Login/Login";
import Poll from "../screens/poll/Poll";
import SignUp from "../screens/auth/SignUp/SignUp";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <BrowserRouter history={history}>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={SignUp} />
      <Route path="/poll/:PollId" component={Poll} />
    </BrowserRouter>
  );
};

export default Routes;
