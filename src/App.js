import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Form from "./Form";
import Review from "./Review";
import Confirmed from "./Confirmed";
import Final from "./Final";
import DevTools from "./DevTools";

const App = () => {
  return (
    <div>
      <div className="nav-bar">
        <h1>kReservations</h1>
        <DevTools />
      </div>
      <div
        style={{
          marginTop: "5%"
        }}
      >
        <Router>
          <div>
            <Switch>
              <Route exact path="/confirm" component={Confirmed} />
              <Route exact path="/review" component={Review}></Route>
              <Route exact path="/" component={Form} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
