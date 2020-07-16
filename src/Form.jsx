import React, { PureComponent } from "react";
import ConfirmButton from "./ConfirmButton";
import DateTime from "./prompts/DateTime";
import UserDetails from "./prompts/UserDetails";
import Guests from "./prompts/Guests";
import Seating from "./prompts/Seating";
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
      birthdayName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
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
        bitrhdayName: newState.birthdayName
      });
    }
  }

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
    return (
      <div className="card">
        <DateTime
          handleChange={this.handleChange}
          input={this.inputChange}
          date={this.state.date}
          time={this.state.time}
        />
        <UserDetails
          inputChange={this.inputChange}
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
        />
        <Guests
          handleChange={this.handleChange}
          inputChange={this.inputChange}
          party={this.state.party}
          children={this.state.children}
          birthday={this.state.birthday}
          birthdayName={this.state.birthdayName}
        />
        <Seating
          handleChange={this.handleChange}
          region={this.state.region}
          smoking={this.state.smoking}
        />
        <ConfirmButton state={this.state} />
      </div>
    );
  }
}

export default Form;
