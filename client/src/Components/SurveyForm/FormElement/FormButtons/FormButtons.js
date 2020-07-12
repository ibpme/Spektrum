import React from "react";
import { Button, ButtonGroup } from "reactstrap";

export default class FormButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.setRSelected = this.setRSelected.bind(this);
  }

  setRSelected(event) {
    const value = Number(event.target.value);
    this.setState({ value: value });
    this.props.setAnswer(value);
  }

  render() {
    return (
      <div className=".container-md text-center m-auto p-4">
        <ButtonGroup>
          <p className="p-2 m-auto text-danger">Disagree</p>
          <Button
            value="1"
            className="rounded m-2"
            color="secondary"
            onClick={this.setRSelected}
            active={this.state.value === 1}
          >
            1
          </Button>
          <Button
            value="2"
            className="rounded m-2"
            color="secondary"
            onClick={this.setRSelected}
            active={this.state.value === 2}
          >
            2
          </Button>
          <Button
            value="3"
            className="rounded m-2"
            color="secondary"
            onClick={this.setRSelected}
            active={this.state.value === 3}
          >
            3
          </Button>
          <Button
            value="4"
            className="rounded m-2"
            color="secondary"
            onClick={this.setRSelected}
            active={this.state.value === 4}
          >
            4
          </Button>
          <p className="p-2 m-auto text-success">Agree</p>
        </ButtonGroup>

        <p>Selected: {this.state.value}</p>
      </div>
    );
  }
}
