import React, { Component } from "react";
import FormElement from "./FormElement/FormElement";
import SurveyHeader from "./SurveyHeader/SurveyHeader";
export class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerArray: [],
    };
    this.clickAnswer = this.clickAnswer.bind(this);
  }
  clickAnswer(answerObject) {
    let checkAnswerArray = this.state.answerArray;
    let newAnswer = checkAnswerArray.filter((answer) => {
      return answer.id !== answerObject.id;
    });
    newAnswer.push(answerObject);
    this.setState({ answerArray: newAnswer });
  }
  render() {
    if (this.props.display) {
      return (
        <div className=".container-fluid cover text-center d-flex w-100 h-100 mt-5 flex-column">
          <SurveyHeader />
          <FormElement someId="1324123" clickAnswer={this.clickAnswer} />
          <FormElement someId="5431232" clickAnswer={this.clickAnswer} />
          <FormElement someId="413234" clickAnswer={this.clickAnswer} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default SurveyForm;
