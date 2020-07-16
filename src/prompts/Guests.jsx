import React from "react";

function Guests({
  handleChange,
  inputChange,
  party,
  children,
  birthday,
  birthdayName
}) {
  return (
    <div>
      <div className="prompt">
        <form>
          <label>
            How many guests in your party?
            <select name="party" value={party} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>
        </form>
      </div>
      <div className="prompt">
        <form>
          <label>How Many Children will be in your party?</label>
          <select name="children" value={children} onChange={handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </form>
      </div>
      <div className="prompt">
        <form>
          <label>
            Is anyone in your party be celebrating a birthday?
            <select name="birthday" value={birthday} onChange={handleChange}>
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </label>
          <input
            type="text"
            name="birthdayName"
            value={birthdayName}
            onChange={inputChange}
            placeholder="Optional: please enter their name"
          />
        </form>
      </div>
    </div>
  );
}

export default Guests;
