import React, { PureComponent } from "react";
import ConfirmButton from "./ConfirmButton";
import DateTime from "./prompts/DateTime";
import UserDetails from "./prompts/UserDetails";
import Birthday from "./prompts/Birthday";
import Seating from "./prompts/Seating";
import OtherAvailableTimes from "./OtherAvailableTimes";
import axios from "axios";
import "./styles.css";

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      party: 0,
      region: "",
      children: 0,
      smoking: false,
      birthday: false,
      birthdayName: "",
      totalGuests: 0,
      noSpace: false,
      schedule: {},
      warning: false,
      extraTimes: false,
      spaceAvailable: false,
      fullCapacity: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.updateNewTime = this.updateNewTime.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("rez")) {
      let newState = JSON.parse(localStorage.getItem("rez"));
      this.setState({
        date: newState.date,
        time: newState.time,
        name: newState.name,
        email: newState.email,
        phone: newState.phone,
        party: newState.party,
        region: newState.region,
        children: newState.children,
        smoking: newState.smoking,
        birthday: newState.birthday,
        birthdayName: newState.birthdayName,
        spaceAvailable: newState.spaceAvailable,
        totalGuests: newState.totalGuests
      });
    }
  }

  getData() {
    if (
      this.state.date &&
      this.state.time &&
      this.state.region &&
      this.state.party
    ) {
      return axios
        .get("/getAll", {
          params: {
            date: this.state.date,
            region: this.state.region,
            time: this.state.time,
            party: this.state.party,
            children: this.state.children
          }
        })
        .then(result => {
          let capacity = result.data.options;
          let response = result.data.response;

          if (response === "available") {
            this.setState({ spaceAvailable: true, warning: false });
          }

          if (typeof capacity === "string") {
            this.setState({
              schedule: capacity,
              fullCapacity: true,
              extraTimes: true,
              spaceAvailable: false,
              warning: false
            });
          }

          if (response === "unavailable") {
            this.setState({
              schedule: result.data.options,
              extraTimes: true,
              spaceAvailable: false,
              warning: false
            });
          }
        })
        .catch(err => {
          console.log(err, "getAll error");
        });
    } else {
      this.setState({ warning: true });
    }
  }
  updateNewTime(newTime) {
    this.setState({ time: newTime, extraTimes: false, spaceAvailable: true });
  }

  handleChange(e) {
    this.setState({
      schedule: {},
      extraTimes: false,
      fullCapacity: false
    });
    let name = e.target.name;
    let value = e.target.value;
    if (this.state.region !== "RiversideSmoking" && this.state.region !== "") {
      this.setState({ smoking: false });
    }

    if (name === "birthday" || name === "smoking") {
      this.setState({ [name]: value });
    } else {
      this.setState({ [name]: value, spaceAvailable: false, warning: false });
    }
  }

  inputChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    const state = this.state;
    return (
      <div className="card">
        <h2 className="provide-details">Please Provide Your Details:</h2>
        <UserDetails
          handleChange={this.handleChange}
          inputChange={this.inputChange}
          name={state.name}
          email={state.email}
          phone={state.phone}
        />
        <Birthday
          handleChange={this.handleChange}
          inputChange={this.inputChange}
          birthday={state.birthday}
          birthdayName={state.birthdayName}
        />
        <div className="date-time">
          <DateTime
            handleChange={this.handleChange}
            inputChange={this.inputChange}
            region={state.region}
            children={state.children}
            party={state.party}
            date={state.date}
            time={state.time}
            getData={this.getData}
          />
          {state.extraTimes && Object.keys(state.schedule).length > 0 ? (
            <OtherAvailableTimes
              schedule={state.schedule}
              party={state.party}
              children={state.children}
              fullCapacity={state.fullCapacity}
              updateNewTime={this.updateNewTime}
            />
          ) : state.spaceAvailable ? (
            <div className="space-available"> Available</div>
          ) : state.warning ? (
            <div className="center">
              <button style={{ background: "#ab6600" }} onClick={this.getData}>
                Please Fill in all required prompts
              </button>
            </div>
          ) : (
            <div className="center">
              <button onClick={this.getData}>Check Availabilty</button>
            </div>
          )}
        </div>
        <Seating
          handleChange={this.handleChange}
          region={state.region}
          smoking={state.smoking}
          children={state.children}
          region={state.region}
        />

        <ConfirmButton state={state} />
      </div>
    );
  }
}

export default Form;
