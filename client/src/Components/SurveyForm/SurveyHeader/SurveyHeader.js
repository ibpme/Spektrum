import React, { Component } from "react";

export class SurveyHeader extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Good Luck</h1>
          <p className="lead"></p>
          <hr className="my-4" />
          <p>Please take the time to fill the form honestly.</p>
        </div>
      </div>
    );
  }
}

export default SurveyHeader;
