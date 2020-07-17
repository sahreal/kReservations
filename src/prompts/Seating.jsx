import React from "react";
import "../styles.css";

const Seating = ({ region, handleChange, smoking, children }) => {
  console.log(region);
  return (
    <div>
      {/* <div>
        <form>
          <label>
            Pick your perferred seating area:
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
          </label>
        </form>
      </div> */}
      <div className="prompt">
        <form>
          <label>
            Will anyone in your party be smoking?
            <select name="smoking" value={smoking} onChange={handleChange}>
              <option value={false}>No</option>
              <option
                disabled={region !== "RiversideSmoking" ? true : null}
                value={region !== "RiversideSmoking" ? false : true}
              >
                Yes
              </option>
            </select>
          </label>
        </form>
        {region !== "RiversideSmoking" && region !== "" ? (
          <div>
            Sorry, there is no smoking prohibited outside the smoking section
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Seating;
