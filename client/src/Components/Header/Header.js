import React, { Component } from "react";

export class Header extends Component {
  render() {
    if (this.props.display) {
      return (
        <div className="container text-center d-flex w-80 h-100 p-3 mx-auto flex-column">
          <div className=".container-sm mx-auto mw-65 px-3">
            <h1 className="border border-dark rounded p-3">Spektrum</h1>
            <p className="p-3">
              Spektrum is a prototype project for classifying human behaviour on
              a graph. To help us and <strong>participate</strong>. The user may
              answer take a look at a few statements and scale it by the level
              in which he/she disagrees once the user have completed all the
              statements he will get his result and his place on the spektrum
              graph.
            </p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Header;
