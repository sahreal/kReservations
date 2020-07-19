import React from "react";
import { useLocation } from "react-router-dom";
import Final from "./Final.jsx";

const Confirmed = () => {
  const location = useLocation();
  const state = location.data;

  return (
    <div>
      <div style={{ alignItems: "center" }} className="card">
        <h2>CONFIRMED</h2>
        <h2>Thank You {state.name}! Your reservation has been confirmed.</h2>
        <h3 style={{ color: "black" }}>
          We'll se you on {state.date} at {state.time}pm!
        </h3>
        <div className="confirmed-prompt">Date: {state.date}</div>
        <div className="confirmed-prompt">Time: {state.time}pm</div>
        <div className="confirmed-prompt">Name: {state.name}</div>
        <div className="confirmed-prompt">Email: {state.email}</div>
        <div className="confirmed-prompt">Phone Number: {state.phone}</div>
        <div className="confirmed-prompt">
          Number of Guests: {state.party} people
        </div>
        <div className="confirmed-prompt">
          Number of Children: {state.children}{" "}
        </div>
        <div className="confirmed-prompt">Seating Area: {state.region}</div>
        <div className="confirmed-prompt">
          Smokers: {state.smoking ? "Yes" : "No"}{" "}
        </div>
        <div className="confirmed-prompt">
          Birthdays:{" "}
          {state.birthday ? `Yes, celebrating for ${state.birthdayName}` : "No"}
        </div>
        <Final />
      </div>
    </div>
  );
};

export default Confirmed;
