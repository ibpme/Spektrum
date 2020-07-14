import React, { Component } from "react";
import UserForm from "./Components/UserForm/UserForm";
import SurveyForm from "./Components/SurveyForm/SurveyForm";
import Header from "./Components/Header/Header";
import SendUserData from "./util/handleUserData";
import SendFormData from "./util/handleFormData";
import Results from "./Components/Result/Results";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResult: false,
      displaySurvey: false,
      userId: null,
      results: {},
    };
    this.submit = this.submit.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
        } else if (!response.created) {
          console.log(response.status);
          this.setState({
            displayResult: true,
            displaySurvey: false,
            results: response.status,
          });
        }
        return response;
      })
      .then((data) => {
        return data;
      });
  }

  submitForm(formData) {
    const attachUserId = {
      userId: this.state.userId,
      data: formData,
    };
    return SendFormData.handleFormData(attachUserId).then((response) => {
      if (response.status) {
        console.log(response.data);
        this.setState({
          displayResult: true,
          displaySurvey: false,
          results: response.data,
        });
      } else {
        console.log(response);
      }
    });
  }

  render() {
    if (this.state.displaySurvey) {
      return (
        <div>
          <SurveyForm onSubmit={this.submitForm} />
        </div>
      );
    } else if (this.state.displayResult) {
      return <Results results={this.state.results} />;
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
