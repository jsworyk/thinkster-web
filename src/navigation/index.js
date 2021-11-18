import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../screens/auth/Login/Login";
import Poll from "../screens/poll/Poll";
import SignUp from "../screens/auth/SignUp/SignUp";
import CatchAll from "../screens/catch-all";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route path="/poll/:PollId" component={Poll} />
        <Route component={CatchAll} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
