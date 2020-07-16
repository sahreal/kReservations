import React from "react";
import "../styles.css";

const DateTime = ({ handleChange, inputChange, date, time }) => {
  return (
    <div>
      <div className="prompt">
        Please Select a Reservation Date:
        <form>
          <label>
            Available dates:
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
          </label>
        </form>
      </div>
      <div className="prompt">
        Please Select a Time:
        <form>
          <label>
            Available Times:
            <select name="time" value={time} onChange={handleChange}>
              <option defaultValue>-- select a time --</option>
              <option value="6">6pm</option>
              <option value="6:30">6:30pm</option>
              <option value="7">7pm</option>
              <option value="7:30">7:30pm</option>
              <option value="8">8pm</option>
              <option value="8:30">8:30pm</option>
              <option value="9">9pm</option>
              <option value="9:30">9:30pm</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};

export default DateTime;
