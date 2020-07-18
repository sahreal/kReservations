import React from "react";
import NewTime from "./NewTime.jsx";

const OtherAvailableTimes = ({ schedule, children, party, updateNewTime }) => {
  let times = Object.keys(schedule);
  let capacity = Object.values(schedule);
  let total = parseInt(children) + parseInt(party);

  return (
    <div>
      <p>
        Sorry, The time you selected is not available, please select one of
        these times below:
      </p>
      <div className="new-time">
        {capacity.map((item, i) => {
          if (item - total > 0) {
            return <NewTime time={times[i]} updateNewTime={updateNewTime} />;
          }
        })}
      </div>
    </div>
  );
};

export default OtherAvailableTimes;
