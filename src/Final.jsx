import React from "react";
import { useHistory } from "react-router-dom";

const Final = () => {
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
