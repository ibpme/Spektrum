import React, { Component } from "react";
import { Form } from "reactstrap";
import FormButtons from "./FormButtons/FormButtons";

export default class FormElement extends Component {
  constructor(props) {
    super(props);
    this.setAnswer = this.setAnswer.bind(this);
  }
  setAnswer(num) {
    const key = Number(this.props.someId);
    console.log(this.props.someId);
    const answerObject = {
      id: key,
      answer: num,
    };
    console.log("In Form Element");
    console.log(answerObject);
    this.props.clickAnswer(answerObject);
  }
  render() {
    return (
      <Form>
        <p className="text-align w-75 p-4 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati
          distinctio architecto dignissimos possimus? Officia sequi numquam
          eligendi ullam! Nesciunt qui cupiditate accusamus voluptas commodi.
        </p>
        <FormButtons setAnswer={this.setAnswer} />
      </Form>
    );
  }
}
