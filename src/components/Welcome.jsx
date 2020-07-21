import React, { Component } from "react";

class Welcome extends Component {
  state = {};
  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <h1>Hey., there! 👋</h1>
        <h6>from Statefull Class Component {name}</h6>
      </React.Fragment>
    );
  }
}

export default Welcome;
