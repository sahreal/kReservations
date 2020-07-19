import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const Review = () => {
  const location = useLocation();
  const state = location.data;

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

  const phoneStyler = num => {
    let firstThree = number => number.slice(0, 3);
    let nextThree = number => number.slice(3, 6);
    let lastFour = number => number.slice(6, number.length);
    let result = "";

    if (num.includes("-")) {
      num = num.split("-").join("");
      result = `(${firstThree(num)})-${nextThree(num)}-${lastFour(num)} `;
    } else {
      result = `(${firstThree(num)})-${nextThree(num)}-${lastFour(num)} `;
    }

    return result;
  };
  let formattedPhone = phoneStyler(state.phone);

  const submitHandler = e => {
    let pathname = e.target.value;
    if (pathname === undefined) {
      localStorage.setItem("rez", JSON.stringify(state));
      history.push({
        pathname: "/",
        data: state
      });
    } else {
      state.phone = formattedPhone;
      bookReservation();
      history.push({
        pathname: pathname,
        data: state
      });
    }
  };

  return (
    <div>
      <div style={{ alignItems: "center" }} className="card">
        <h2>Review Your Reservation</h2>
        <h3 style={{ color: "black" }}>Click to update any information</h3>
        <div className="prompt" value="edit" onClick={submitHandler}>
          Date: <span>{state.date}</span>
        </div>
        <div className="prompt" value="edit" onClick={submitHandler}>
          Time: <span>{state.time}pm</span>
        </div>
        <div className="prompt" value="edit" onClick={submitHandler}>
          Name: <span>{state.name}</span>
        </div>
        <div className="prompt" value="edit" onClick={submitHandler}>
          Email: <span>{state.email}</span>
        </div>
        <div className="prompt" value="edit" onClick={submitHandler}>
          Phone Number: <span>{formattedPhone}</span>
        </div>
        <div className="prompt" value="edit" onClick={submitHandler}>
          Number of Guests: <span>{state.party} people</span>
        </div>
        <div className="prompt" value="edit" onClick={submitHandler}>
          Number of Children: <span>{state.children} </span>
        </div>
        <div className="prompt" value="edit" onClick={submitHandler}>
          Seating Area: <span>{state.region}</span>
        </div>
        <div className="prompt" value="edit" onClick={submitHandler}>
          Smokers: <span>{state.smoking ? "Yes" : "No"}</span>{" "}
        </div>
        <div className="prompt" value="edit" onClick={submitHandler}>
          Birthdays:{" "}
          <span>
            {state.birthday
              ? `Yes ${
                  state.birthdayName
                    ? `, Birthday for: ${state.birthdayName}`
                    : ""
                }`
              : "No"}
          </span>
        </div>

        <button value="confirm" onClick={submitHandler}>
          {" "}
          Confirm{" "}
        </button>
      </div>
    </div>
  );
};

export default Review;
