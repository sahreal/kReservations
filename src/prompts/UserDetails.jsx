import React from "react";
import "../styles.css";

const UserDetails = ({ inputChange, name, phone, email }) => {
  return (
    <div>
      <div className="prompt">
        <form>
          <label>Please enter your name:</label>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            value={name}
            onChange={inputChange}
          />
        </form>
      </div>
      <div className="prompt">
        <form>
          <label>Please enter your email:</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="enter email"
            onChange={inputChange}
          />
        </form>
      </div>
      <div className="prompt">
        <form>
          <label>Please enter your phone number:</label>
          <input
            type="text"
            name="phone"
            placeholder="enter phone number"
            value={phone}
            onChange={inputChange}
          />
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
