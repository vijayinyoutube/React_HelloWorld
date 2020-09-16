import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
  }
  greetparent = (childname) => {
    alert(`Hello ${this.state.parentName} from ${childname} 👋`);
  };

  render() {
    return (
      <div>
        <ChildComponent handleGreet={this.greetparent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
