import React from "react";
import "../styles.css";

const Seating = ({ region, handleChange, smoking, children }) => {
  return (
    <div className="seating">
      <div className="smokers">
        {region !== "RiversideSmoking" && region !== "" ? (
          <p className="error">
            *Sorry, there is no smoking prohibited outside the smoking section.
            If you wish to smoke please select the Riverside Smoking Section
          </p>
        ) : (
          <form>
            <label>
              Will anyone in your party be smoking?
              <select name="smoking" value={smoking} onChange={handleChange}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </label>
          </form>
        )}
      </div>
    </div>
  );
};

export default Seating;
