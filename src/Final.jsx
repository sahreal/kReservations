import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Final = () => {
  const location = useLocation();
  const state = location.data;

  const history = useHistory();

  const submitHandler = () => {
    localStorage.clear();
    history.push({
      pathname: "/"
    });
  };

  return (
    <div>
      <h2>See You There!</h2>
      <div className="card">
        THANKS FOR BOOKING A RESSERVATION WITH US {state.name}! We'll se you on{" "}
        {state.date} at {state.time}
        <button onClick={submitHandler}>Make Another Reservation</button>
      </div>
    </div>
  );
};

export default Final;
