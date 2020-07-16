import React from "react";
import { useHistory } from "react-router-dom";

function Confirm({ state }) {
  const history = useHistory();

  const submitHandler = () => {
    console.log(state, "state");
    history.push({
      pathname: "/review",
      data: state
    });
  };
  return <button onClick={submitHandler}>Confirm</button>;
}

export default Confirm;
