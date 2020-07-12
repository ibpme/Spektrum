import React, { Component } from "react";
import "./App.css";
import UserForm from "./Components/UserForm/UserForm";
import SurveyForm from "./Components/SurveyForm/SurveyForm";
import Header from "./Components/Header/Header";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayHeader: true,
      displayUser: true,
      displaySurvey: false,
    };
  }
  render() {
    return (
      <div>
        <Header display={this.state.displayHeader} />
        <UserForm display={this.state.displayUser} />
        <SurveyForm display={this.state.displayForm} />
      </div>
    );
  }
}
