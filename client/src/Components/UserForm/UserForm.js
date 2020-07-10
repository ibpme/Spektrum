import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export class UserForm extends Component {
  render() {
    return (
      <div className="container text-center d-flex w-80 h-100 p-3 mx-auto flex-column bg-light">
        <Form className="text-left p-2" action="./postUser" method="POST">
          <FormGroup>
            <Label for="inputUser">Full Name</Label>
            <Input
              required
              type="text"
              id="inputUser"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="inputEmail">Email</Label>
            <Input
              required
              type="email"
              id="inputEmail"
              name="email"
              placeholder="Emali"
            />
          </FormGroup>
          <FormGroup>
            <Label for="inputPlace">City/Country</Label>
            <Input
              required
              type="text"
              name="place"
              id="inputPlace"
              placeholder="Where are you currently ?"
            />
          </FormGroup>
          <h4>Gender</h4>
          <FormGroup check>
            <Input
              required
              type="radio"
              name="gender"
              id="genderF"
              value="female"
            />
            <Label className="form-check-label" for="genderF">
              Female
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name="gender" id="genderM" value="male" />
            <Label for="genderM">Male</Label>
          </FormGroup>
          <Button type="submit" className="my-2">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default UserForm;
