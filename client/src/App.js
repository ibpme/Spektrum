import React, { Component } from "react";
import "./App.css";
import UserForm from "./Components/UserForm/UserForm";
import SurveyForm from "./Components/SurveyForm/SurveyForm";
import Header from "./Components/Header/Header";
import SendUserData from "./util/handleUserData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayHeader: true,
      displayUser: true,
      displaySurvey: true,
    };
    this.submit = this.submit.bind(this);
  }

  submit(userData) {
    return SendUserData.handleUserData(userData)
      .then((response) => {
        if (response.created) {
          this.setState({
            displayUser: false,
            displayHeader: false,
            displaySurvey: true,
          });
        }
        return response;
      })
      .then((data) => {
        return data;
      });
  }

  render() {
    return (
      <div>
        <Header display={this.state.displayHeader} />
        <UserForm display={this.state.displayUser} onSubmit={this.submit} />
        <SurveyForm display={this.state.displaySurvey} />
      </div>
    );
  }
}
