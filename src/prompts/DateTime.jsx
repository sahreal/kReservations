import React from "react";
import Guests from "./Guests.jsx";
import "../styles.css";

const DateTime = ({
  handleChange,
  inputChange,
  region,
  party,
  children,
  date,
  time
}) => {
  const capacity = {
    MainHall: "12 people",
    Bar: "4 people",
    Riverside: "8 people",
    RiversideSmoking: "6 people"
  };
  return (
    <div className="availablity">
      <div
        style={{ background: "none", border: "none" }}
        className="user-details"
      >
        <div className="user-input">
          <form>
            <label>Please Select a Reservation Date: </label>
            <select name="date" value={date} onChange={handleChange}>
              <option defaultValue>-- select a date --</option>
              <option value="July-24">July 24th</option>
              <option value="July-25">July 25th</option>
              <option value="July-26">July 26th</option>
              <option value="July-27">July 27th</option>
              <option value="July-28">July 28th</option>
              <option value="July-29">July 29th</option>
              <option value="July-30">July 30th</option>
              <option value="July-31">July 31st</option>
            </select>
          </form>
        </div>
        <div className="user-input">
          <form>
            <label>Please Select a Time: </label>
            <select name="time" value={time} onChange={handleChange}>
              <option defaultValue>-- select a time --</option>
              <option value="6">6:00pm</option>
              <option value="6:30">6:30pm</option>
              <option value="7">7:00pm</option>
              <option value="7:30">7:30pm</option>
              <option value="8">8:00pm</option>
              <option value="8:30">8:30pm</option>
              <option value="9">9:00pm</option>
              <option value="9:30">9:30pm</option>
            </select>
          </form>
        </div>
        <div className="user-input">
          <form>
            <label>Pick your perferred seating area: </label>
            <select name="region" value={region} onChange={handleChange}>
              <option defaultValue>-- select a dining area --</option>
              <option value="MainHall">Main Hall</option>
              <option disabled={children > 0 ? true : null} value="Bar">
                {children > 0 ? "No Children perimtted in Bar Area" : "Bar"}
              </option>
              <option value="Riverside">Riverside</option>
              <option
                disabled={children > 0 ? true : null}
                value="RiversideSmoking"
              >
                {children > 0
                  ? "No Children perimtted in Smoking Area"
                  : " Riverside Smoking Section"}
              </option>
            </select>
          </form>
        </div>
      </div>
      {region !== "" ? (
        <p
          style={{
            fontStyle: "normal",
            fontSize: "20px",
            color: "cadetblue"
          }}
        >
          This seating area can accomidate parties of {capacity[region]}
        </p>
      ) : null}
      <Guests
        handleChange={handleChange}
        inputChange={inputChange}
        party={party}
        children={children}
        region={region}
      />
    </div>
  );
};

export default DateTime;
