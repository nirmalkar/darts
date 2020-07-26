import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";

import "./scss/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
