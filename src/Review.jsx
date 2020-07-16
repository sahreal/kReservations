import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Review = () => {
  const location = useLocation();
  const state = location.data;

  const history = useHistory();

  const submitHandler = e => {
    let pathname = e.target.value === "confirm" ? "/confirm" : "/";
    localStorage.setItem("rez", JSON.stringify(state));
    history.push({
      pathname: pathname,
      data: state
    });
  };

  return (
    <div>
      <h2>REVIEW PAGE</h2>
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
      <button value="edit" onClick={submitHandler}>
        {" "}
        Edit{" "}
      </button>
      <button value="confirm" onClick={submitHandler}>
        {" "}
        Confirm{" "}
      </button>
    </div>
  );
};

export default Review;
