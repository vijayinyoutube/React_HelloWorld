import React, { Component } from "react";
import { FaBell } from "react-icons/fa";

class Message extends Component {
  state = {
    message: "Welcome Visitor",
    count: 0,
    buttonText: "Subscribe"
  };

  handleSubscription = () => {
    if (this.state.count % 2 == 0) {
      this.setState({
        message: "Thanks for Subscribing!",
        buttonText: "UnSubscribe",
        count: this.state.count + 1,
      });

    }
    else {
      this.setState({
        message: "Welcome Visitor!",
        buttonText: "Subscribe",
        count: this.state.count + 1,
      });
    }

    console.log(this.state.count);
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
          {this.state.buttonText}
        </button>
      </React.Fragment>
    );
  }
}

export default Message;
