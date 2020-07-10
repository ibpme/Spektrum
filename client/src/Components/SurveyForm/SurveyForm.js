import React, { Component } from "react";
import FormElement from "./FormElement/FormElement";
import SurveyHeader from "./SurveyHeader/SurveyHeader";
export class SurveyForm extends Component {
  render() {
    return (
      <div className=".container-fluid cover text-center d-flex w-100 h-100 mt-5 flex-column">
        <SurveyHeader />
        <FormElement />
        <FormElement />
        <FormElement />
        <FormElement />
        <FormElement />
        <FormElement />
        <FormElement />
      </div>
    );
  }
}

export default SurveyForm;
