import React, { Component } from "react";
import { Alert } from "reactstrap";

export class AlertBar extends Component {
  render() {
    if (this.props.userCreated === false) {
      return <Alert color="danger">{this.props.status}</Alert>;
    } else {
      return <div></div>;
    }
  }
}

export default AlertBar;
