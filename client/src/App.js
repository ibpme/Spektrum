import React, { Component } from "react";
import "./App.css";
import UserForm from "./Components/UserForm/UserForm";
import SurveyForm from "./Components/SurveyForm/SurveyForm";
import Header from "./Components/Header/Header";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserForm />
        <SurveyForm />
      </div>
    );
  }
}
