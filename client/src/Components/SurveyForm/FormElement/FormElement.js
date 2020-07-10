import React, { Component } from "react";
import { Form } from "reactstrap";
import FormButtons from "./FormButtons/FormButtons";

export default class FormElement extends Component {
  render() {
    return (
      <Form>
        <p class="text-align w-75 p-4 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati
          distinctio architecto dignissimos possimus? Officia sequi numquam
          eligendi ullam! Nesciunt qui cupiditate accusamus voluptas commodi.
        </p>
        <FormButtons />
      </Form>
    );
  }
}
