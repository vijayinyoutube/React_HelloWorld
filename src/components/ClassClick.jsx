import React, { Component } from "react";

class ClassClick extends Component {
  handleClick = () => {
    console.log("Button clicked");
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="btn btn-primary"
          type="submit"
        >
          Click me
        </button>
      </div>
    );
  }
}

export default ClassClick;
