import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const Confirmed = () => {
  const location = useLocation();
  const state = location.data;
  console.log(state, "confirmedstate");
  const history = useHistory();

  const bookReservation = () => {
    axios.post("/update", {
      date: state.date,
      region: state.region,
      time: state.time,
      party: state.party,
      children: state.children
    });
  };

  const submitHandler = () => {
    localStorage.clear();
    history.push({
      pathname: "/final",
      data: state
    });
    bookReservation();
  };

  return (
    <div>
      <h2>CONFIRM PAGE</h2>
      <div className="card">
        <div className="prompt">Date: {state.date}</div>
        <div className="prompt">Time: {state.time}pm</div>
        <div className="prompt">Name: {state.name}</div>
        <div className="prompt">Email: {state.email}</div>
        <div className="prompt">Phone Number: {state.phone}</div>
        <div className="prompt">Number of Guests: {state.party} people</div>
        <div className="prompt">Number of Children: {state.children} </div>
        <div className="prompt">Seating Area: {state.region}</div>
        <div className="prompt">Smokers: {state.smoking ? "Yes" : "No"} </div>
        <div className="prompt">
          Birthdays:{" "}
          {state.birthday ? `Yes, celebrating for ${state.birthdayName}` : "No"}
        </div>
      </div>
      <button onClick={submitHandler}>Confirm</button>
    </div>
  );
};

export default Confirmed;
