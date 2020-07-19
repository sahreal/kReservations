import React from "react";
import "../styles.css";

function Guests({ handleChange, party, children, region }) {
  const maxPartySize = {
    MainHall: 12,
    Bar: 4,
    Riverside: 8,
    RiversideSmoking: 6
  };
  let nums = [];
  let i = 0;
  while (i < maxPartySize[region]) {
    i++;
    nums.push(i);
  }

  return (
    <div className="selectors">
      <form>
        <label>How many guests in your party? </label>
        <select name="party" value={party} onChange={handleChange}>
          <option defaultValue>0</option>
          {nums.map(item => {
            return (
              <option key={item} value={item}>
                {" "}
                {item}{" "}
              </option>
            );
          })}
        </select>
      </form>
      <form>
        <label>How Many Children will be in your party?</label>
        <select name="children" value={children} onChange={handleChange}>
          <option defaultValue>0</option>
          {nums.slice(0, nums.length - party).map(item => {
            return (
              <option key={item} value={item}>
                {" "}
                {item}{" "}
              </option>
            );
          })}
        </select>
      </form>
      {(region === "Bar" || region === "RiversideSmoking") && children > 0 ? (
        <div className="child-warning">
          <p>Children are not permitted in the Bar or Smoking area.</p>
          Please Select Another seating area of remove children from your party.
        </div>
      ) : null}
    </div>
  );
}

export default Guests;
