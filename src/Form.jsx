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

    this.handleChange = this.handleChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }

  inputChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.state, "state");
    return (
      <div className="card">
        <div className="prompt">
          Please Select a Reservation Date:
          <form>
            <label>
              Available dates:
              <select
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              >
                <option disabled selected value>
                  -- select a date --
                </option>
                <option value="July-24">July 24th</option>
                <option value="July-25">July 25th</option>
                <option value="July-26">July 26th</option>
                <option value="July-27">July 27th</option>
                <option value="July-28">July 28th</option>
                <option value="July-29">July 29th</option>
                <option value="July-30">July 30th</option>
                <option value="July-31">July 31st</option>
              </select>
            </label>
          </form>
        </div>
        <div className="prompt">
          Please Select a Time:
          <form>
            <label>
              Available Times:
              <select
                name="time"
                value={this.state.time}
                onChange={this.handleChange}
              >
                <option selected="selected">-- select a time --</option>
                <option value="6">6pm</option>
                <option value="6:30">6:30pm</option>
                <option value="7">7pm</option>
                <option value="7:30">7:30pm</option>
                <option value="8">8pm</option>
                <option value="8:30">8:30pm</option>
                <option value="9">9pm</option>
                <option value="9:30">9:30pm</option>
              </select>
            </label>
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>Please enter your name:</label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              value={this.state.name}
              onChange={this.inputChange}
            />
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>Please enter your email:</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="enter email"
              onChange={this.inputChange}
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
              value={this.state.phone}
              onChange={this.inputChange}
            />
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>
              How many guests in your party?
              <select
                name="party"
                value={this.state.party}
                onChange={this.handleChange}
              >
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
            <label>
              Pick your perferred seating area:
              <select
                name="region"
                value={this.state.region}
                onChange={this.handleChange}
              >
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
            <input
              type="text"
              name="children"
              value={this.state.region}
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>
              Will anyone in your party be smoking?
              <select
                name="smoking"
                value={this.state.smoking}
                onChange={this.handleChange}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </label>
          </form>
        </div>
        <div className="prompt">
          <form>
            <label>
              Is anyone in your party be celebrating a birthday?
              <select
                name="smoking"
                value={this.state.smoking}
                onChange={this.handleSelect}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </label>
            <input
              type="text"
              name="birthdayName"
              value={this.state.birthdaName}
              onChange={this.inputChange}
              placeholder="Optional: please enter their name"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
