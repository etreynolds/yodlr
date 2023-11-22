import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Register from "./Register";
import Admin from "./Admin";
import Home from "./Home";

const Routes = () => {
  return (
    <>
    <Switch>
      <Route exact path="/admin"><Admin /></Route>
      <Route exact path="/signup"><Register /></Route>
      <Route exact path="/"><Home /></Route>
      <Redirect to="/" />
    </Switch>
    </>
  )
}

export default Routes;