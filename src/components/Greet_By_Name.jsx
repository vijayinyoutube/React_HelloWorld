import React, { Component } from "react";

const Greet_By_Name = (props) => {
  return (
    <React.Fragment>
      <h1>
        Hello., {props.name} {props.children}
      </h1>
    </React.Fragment>
  );
};

export default Greet_By_Name;
