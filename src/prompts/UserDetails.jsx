import React from "react";
import "../styles.css";

const UserDetails = ({ inputChange, name, phone, email }) => {
  const validateEmail = input => {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return regex.test(input);
  };

  const validatePhone = input => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(input);
  };
  return (
    <div className="user-details">
      <div className="user-input">
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
      <div className="user-input">
        {email.length > 0 && !validateEmail(email) ? (
          <p>*Please enter a valid email</p>
        ) : null}
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
      <div className="user-input">
        {phone.length > 0 && !validatePhone(phone) ? (
          <p>*Please enter a valid phone number</p>
        ) : null}
        <form>
          <label>Please enter your phone number:</label>
          <input
            type="text"
            name="phone"
            placeholder="enter phone number"
            id="phoneNumber"
            maxLength="12"
            value={phone}
            onChange={inputChange}
          />
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
