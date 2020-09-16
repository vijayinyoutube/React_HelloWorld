import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn === true ? (
      <div>Welcome Vijay</div>
    ) : (
      <div>Welcome Guest</div>
    );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vijay</div>;
    // } else {
    //   message = <div>Welcom Guest</div>;
    // }

    // return message;

    // if(this.state.isLoggedIn)
    // {
    //     return <div>Welcome</div>
    // }
    // else{
    //     return <div>Welcome Back</div>
    // }
  }
}

export default UserGreetings;
