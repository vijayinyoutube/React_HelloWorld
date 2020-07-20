import React, { Component } from "react";

const Greet_By_Name = (props) => {
  return (
    <div>
      Hello., {props.name} {props.children}
    </div>
  );
};

export default Greet_By_Name;
