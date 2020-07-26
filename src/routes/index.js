import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <div>
      <Route path="/" render={() => <Dashboard />} />
    </div>
  );
};
export default Routes;
