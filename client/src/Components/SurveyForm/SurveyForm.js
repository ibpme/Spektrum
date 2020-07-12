import React, { Component } from "react";
import FormElement from "./FormElement/FormElement";
import SurveyHeader from "./SurveyHeader/SurveyHeader";
export class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerArray: [],
    };
    this.clcikAnswer = this.clcikAnswer.bind(this);
  }
  clickAnswer(answer) {
    let newAnswer = this.state.answerArray.concat(answer);
    this.setState({ answerArray: newAnswer });
  }
  render() {
    if (this.props.display) {
      return (
        <div className=".container-fluid cover text-center d-flex w-100 h-100 mt-5 flex-column">
          <SurveyHeader />
          <FormElement setAnswer={this.clickAnswer} />
          <FormElement />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default SurveyForm;
