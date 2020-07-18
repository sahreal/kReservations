import React from "react";
import "../styles.css";

const Birthday = ({ birthday, birthdayName, handleChange, inputChange }) => {
  return (
    <div className="birthday">
      <form>
        <label>Is anyone in your party celebrating a birthday? </label>
        <select name="birthday" value={birthday} onChange={handleChange}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        {birthday ? (
          <input
            type="text"
            name="birthdayName"
            value={birthdayName}
            onChange={inputChange}
            placeholder="Optional: enter name"
          />
        ) : null}
      </form>
    </div>
  );
};

export default Birthday;
