import React, { PureComponent } from "react";
import "./styles.css";

class Form extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      time: "",
      name: "",
      number: "",
      party: 0,
      region: "",
      children: 0,
      smoking: false,
      birthday: false,
      bitrhdayName: ""
    };
  }

  render() {
    return (
      <div className="card">
        <div className="prompt">
          Please Select a Reservation Date:
          <form>
            <label>
              Available dates:
              <select>
                <option value="">July24th</option>
                <option value="">July25th</option>
                <option value="">July26th</option>
              </select>
            </label>
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>Please enter your name:</label>
            <input type="text" />
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>Please enter your email:</label>
            <input type="text" />
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>Please enter your phone number:</label>
            <input type="text" />
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>
              Pick your perferred seating area:
              <select>
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
            <label>How Many Children will be in your party?</label>
            <input type="text" />
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>
              Will anyone in your party be smoking?
              <select>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </label>
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>
              Is anyone in your party be celebrating a birthday?
              <select>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </label>
            <input
              type="text"
              placeholder="Optional: please enter their name"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
