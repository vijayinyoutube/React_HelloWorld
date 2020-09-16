import React, { Component } from "react";
import { FaBell } from "react-icons/fa";

class Message extends Component {
  state = {
    message: "Welcome Visitor",
  };

  handleSubscription = () => {
    this.setState({
      message: "Thanks for Subscribing!",
    });
  };

  render() {
    return (
      <React.Fragment>
        <h3>
          {this.state.message}
        </h3>

        <button
          onClick={() => this.handleSubscription()}
          type="button"
          className="btn btn-outline-danger"
        >
          {" "}
          <span>
            <FaBell size="18.5"></FaBell>
          </span>
          <span>&nbsp;</span>
          Subscribe
        </button>
      </React.Fragment>
    );
  }
}

export default Message;
