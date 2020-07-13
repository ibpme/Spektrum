import React, { Component } from "react";
import FormElement from "./FormElement/FormElement";
import SurveyHeader from "./SurveyHeader/SurveyHeader";

export class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerArray: [],
      data: [],
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
  componentDidMount() {
    fetch("http://localhost:5000/api/getQuestions/listAll")
      .then((response) => response.json())
      .then((response) => {
        const listQuestions = response;
        this.setState({ data: listQuestions });
      });
  }

  //Fix Map issue and getting form questions to the Front_end
  render() {
    if (this.props.display && this.state.data.length !== 0) {
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
        </div>
      );
    } else return <div></div>;
  }
}

export default SurveyForm;
