import React, { Component } from "react";

const Greet = (props) => {
  return (
    <React.Fragment>
      <h1>Hey., there! 👋</h1>
      <h6>from Stateless Functional Component {props.name}</h6>
    </React.Fragment>
  );
};

export default Greet;
