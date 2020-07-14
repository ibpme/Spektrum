import React, { Component } from "react";
import { Form } from "reactstrap";
import FormButtons from "./FormButtons/FormButtons";

export default class FormElement extends Component {
  constructor(props) {
    super(props);
    this.setAnswer = this.setAnswer.bind(this);
  }
  setAnswer(num) {
    const formId = this.props.formId;
    const answerObject = {
      id: formId,
      answer: num,
    };
    this.props.clickAnswer(answerObject);
  }
  render() {
    return (
      <Form>
        <p className="text-align w-75 p-4 m-auto">{this.props.question}</p>
        <FormButtons setAnswer={this.setAnswer} />
      </Form>
    );
  }
}
