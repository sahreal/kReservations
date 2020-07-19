import React from "react";
import "./styles.css";

const NewTime = ({ time, updateNewTime }) => {
  const handleClick = () => {
    updateNewTime(time);
  };

  return (
    <div style={{ flex: "1 1 250px" }}>
      <button style={{ width: "60%", margin: "15px" }} onClick={handleClick}>
        {time}pm
      </button>
    </div>
  );
};

export default NewTime;
