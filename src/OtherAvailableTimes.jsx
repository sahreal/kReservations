import React from "react";
import NewTime from "./NewTime.jsx";

const OtherAvailableTimes = ({ fullCapacity, schedule, updateNewTime }) => {
  let array = [];

  for (let key in schedule) {
    array.push([key, schedule[key]]);
  }

  array.sort((a, b) => a[0][0] - b[0][0]);
  return (
    <div>
      <div>
        <p>
          Sorry,{" "}
          {fullCapacity
            ? "We are full booked for the evening, please select another date"
            : "The time you selected is not available, please select one of these times below"}
        </p>

        <div className="new-time">
          {array.map(item => {
            if (item[1] >= 0) {
              return <NewTime time={item[0]} updateNewTime={updateNewTime} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherAvailableTimes;
