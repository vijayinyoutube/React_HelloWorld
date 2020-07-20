import React, { Component } from "react";

// rce
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   ()=>{
    //     console.log(this.state.count)
    //   }
    // );

    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log(this.state.count);
      }
    );
  };

  incrementFive = () => {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  };
  render() {
    return (
      <React.Fragment>
        {" "}
        <h2>
          <div>Count - {this.state.count}</div>
        </h2>
        <button
          onClick={() => this.incrementFive()}
          className="btn btn-success"
          type="submit"
        >
          Increment Count
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
