import React, { Component } from "react";

const Greet = (props) => {
  const { name } = props;
  return (
    <React.Fragment>
      <h1>Hey., there! 👋</h1>
      <h6>from Stateless Functional Component {name}</h6>
    </React.Fragment>
  );
};

export default Greet;
