import React, { Component } from "react";

const style = {
  fontWeight: "bold",
  color: "white",
  fontSize: 15,
};

const NavBar = (prpos) => {
  return (
    <nav style={style} className="navbar navbar-light bg-primary">
      {prpos.name}
    </nav>
  );
};

export default NavBar;
