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
    <div style={{ width: "100%", textAlign: "center" }}>
      <button onClick={submitHandler}>Make Another Reservation</button>
    </div>
  );
};

export default Final;
