import React, { Component } from "react";
import FormElement from "./FormElement/FormElement";
import SurveyHeader from "./SurveyHeader/SurveyHeader";
import { Button } from "reactstrap";
import AlertBar from "../UserForm/AlertBar";

export class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerArray: [],
      data: [],
      ready: true,
    };
    this.clickAnswer = this.clickAnswer.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  clickAnswer(answerObject) {
    //answerObject contains formID and the selected answer {answer: , id:,}
    let checkAnswerArray = this.state.answerArray;
    let newAnswer = checkAnswerArray.filter((answer) => {
      return answer.id !== answerObject.id;
    });
    newAnswer.push(answerObject);
    this.setState({ answerArray: newAnswer });
  }
  handleClick() {
    if (this.state.answerArray.length === this.state.data.length) {
      this.setState({ ready: true });
      this.props.onSubmit(this.state.answerArray).then((response) => {
        console.log(response);
      });
    } else {
      this.setState({ ready: false });
    }
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/getQuestions/listAll")
      .then((response) => response.json())
      .then((response) => {
        const listQuestions = response;
        this.setState({ data: listQuestions, answerArray: [], ready: true });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ data: [], answerArray: [], ready: true });
      });
  }

  render() {
    if (this.state.data.length !== 0) {
      const formElement = this.state.data.map((list) => {
        return (
          <FormElement
            clickAnswer={this.clickAnswer}
            question={list.question}
            key={list._id.toString()}
            formId={list._id}
          />
        );
      });
      return (
        <div className=".container-fluid cover text-center d-flex w-100 h-100 mt-5 flex-column">
          <SurveyHeader />
          {formElement}
          <AlertBar
            created={this.state.ready}
            status="Please complete the survey"
          />
          <Button onClick={this.handleClick}> Submit Form</Button>
        </div>
      );
    } else
      return (
        <div>
          <h1>Loading Questions...</h1>
        </div>
      );
  }
}

export default SurveyForm;
