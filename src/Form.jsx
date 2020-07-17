import React, { PureComponent } from "react";
import ConfirmButton from "./ConfirmButton";
import DateTime from "./prompts/DateTime";
import UserDetails from "./prompts/UserDetails";
import Guests from "./prompts/Guests";
import Seating from "./prompts/Seating";
import axios from "axios";
import "./styles.css";

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: "July-24",
      time: "",
      name: "",
      phone: "",
      email: "",
      party: 0,
      region: "MainHall",
      children: 0,
      smoking: false,
      birthday: false,
      birthdayName: "",
      totalGuests: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
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
        totalGuests: newState.totalGuests
      });
    }
  }

  getData() {
    return axios
      .get("/getAll", {
        params: {
          date: this.state.date,
          region: this.state.region,
          time: this.state.time
        }
      })
      .then(result => console.log(result.data, "data"))
      .catch(err => console.log(err, "getAll error"));
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "party" || name === "children") {
      this.setState({
        totalGuests: this.state.totalGuests + Number(value),
        [name]: value
      });
    } else {
      this.setState({ [name]: value });
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
    console.log(this.state.children, "children");
    const state = this.state;
    return (
      <div className="card">
        <DateTime
          handleChange={this.handleChange}
          region={state.region}
          children={state.children}
          date={state.date}
          time={state.time}
          getData={this.getData}
        />
        <Seating
          handleChange={this.handleChange}
          region={state.region}
          smoking={state.smoking}
          children={state.children}
          region={state.region}
        />
        <Guests
          handleChange={this.handleChange}
          inputChange={this.inputChange}
          party={state.party}
          children={state.children}
          birthday={state.birthday}
          birthdayName={state.birthdayName}
          region={state.region}
        />
        <UserDetails
          inputChange={this.inputChange}
          name={state.name}
          email={state.email}
          phone={state.phone}
        />

        <ConfirmButton state={state} />
      </div>
    );
  }
}

export default Form;
