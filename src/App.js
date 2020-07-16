import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Form from "./Form";
import Review from "./Review";
import Confirmed from "./Confirmed";
import Final from "./Final";

const App = () => {
  const submitHandler = () => {
    localStorage.clear();
  };
  return (
    <div>
      <h1>kReservations</h1>
      <button onClick={submitHandler}>Clear Local</button>
      <Router>
        <div>
          <Switch>
            <Route exact path="/final" component={Final} />
            <Route exact path="/confirm" component={Confirmed} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/" component={Form} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
