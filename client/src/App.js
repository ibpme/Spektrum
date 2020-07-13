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
      displaySurvey: false,
      userId: null,
    };
    this.submit = this.submit.bind(this);
  }

  submit(userData) {
    return SendUserData.handleUserData(userData)
      .then((response) => {
        if (response.created) {
          const userId = response.userId;
          this.setState({
            displaySurvey: true,
            userId: userId,
          });
        }
        return response;
      })
      .then((data) => {
        return data;
      });
  }

  render() {
    if (this.state.displaySurvey) {
      return (
        <div>
          <SurveyForm />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <UserForm onSubmit={this.submit} />
        </div>
      );
    }
  }
}
