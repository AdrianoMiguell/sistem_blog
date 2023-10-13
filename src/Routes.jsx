import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/client/Home";
import Register from "./pages/client/Register";
import Login from "./pages/client/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" />
      <Route Component={Register} path="/register" />
    </BrowserRouter>
  );
};

export default Routes;
