import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
  }

  handleClick = () => {
    this.setState({
      message: "GoodBye!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button
          onClick={this.handleClick}
          className="btn btn-success"
          type="submit"
        >
          Bind Event
        </button>
      </div>
    );
  }
}

export default EventBind;
