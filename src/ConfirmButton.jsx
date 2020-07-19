import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

function Confirm({ state }) {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const submitHandler = () => {
    state.spaceAvailable = true;

    history.push({
      pathname: "/review",
      data: state
    });
  };

  const toggle = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="center">
      {!state.date ||
      !state.time ||
      !state.party ||
      !state.region ||
      !state.email ||
      !state.name ||
      !state.phone ? (
        <div>
          {open ? (
            <button style={{ background: "#ab6600" }} onClick={toggle}>
              Please enter all missing fields
            </button>
          ) : (
            <button onClick={toggle}>Confirm</button>
          )}
        </div>
      ) : state.spaceAvailable ? (
        <div>
          <button onClick={submitHandler}>Confirm</button>
        </div>
      ) : (
        <div>
          <button style={{ background: "#ab6600" }} disabled>
            Please check for Availablity
          </button>
        </div>
      )}
    </div>
  );
}

export default Confirm;
