import React from "react";
import "../styles.css";

const Seating = ({ region, handleChange, smoking }) => {
  return (
    <div>
      <div className="prompt">
        <form>
          <label>
            Pick your perferred seating area:
            <select name="region" value={region} onChange={handleChange}>
              <option value="MainHall">Main Hall</option>
              <option value="Bar">Bar</option>
              <option value="RiverSide">Riverside</option>
              <option value="RiverSideSmoking">
                Riverside Smoking Section
              </option>
            </select>
          </label>
        </form>
      </div>
      <div className="prompt">
        <form>
          <label>
            Will anyone in your party be smoking?
            <select name="smoking" value={smoking} onChange={handleChange}>
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Seating;
