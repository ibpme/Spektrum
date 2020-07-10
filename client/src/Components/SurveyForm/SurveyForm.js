import React, { Component } from "react";
import FormElement from "../FormElement/FormElement";

export class SurveyForm extends Component {
  render() {
    return (
      <div>
        <FormElement />
        <FormElement />
        <FormElement />
      </div>
    );
  }
}

export default SurveyForm;
