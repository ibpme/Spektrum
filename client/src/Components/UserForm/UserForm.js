import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import SendUserData from "../../util/handleUserData";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      place: "",
      gender: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const userData = this.state;
    console.log(`In handle Submit:`);
    console.log(userData);
    SendUserData.handleUserData(userData);
  }

  render() {
    return (
      <div className="container text-center d-flex w-80 h-100 p-3 mx-auto flex-column bg-light">
        <p>
          {this.state.name} {this.state.email}
          {this.state.place} {this.state.gender}
        </p>
        <Form onSubmit={this.handleSubmit} className="text-left p-2">
          <FormGroup>
            <Label for="inputUser">Full Name</Label>
            <Input
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.email}
              onChange={this.handleChange}
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
              value={this.state.place}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              required
              type="radio"
              name="gender"
              id="genderF"
              value={"female"}
            />
            <Label className="form-check-label" for="genderF">
              Female
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              onChange={this.handleChange}
              type="radio"
              name="gender"
              id="genderM"
              value="male"
            />
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
