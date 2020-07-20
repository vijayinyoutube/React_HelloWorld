import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet.jsx";
import Welcome from "./components/Welcome.jsx";
import Greet_By_Name from "./components/Greet_By_Name";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar name="SFC | SCC" />
      <Greet />
      <Welcome />
      <NavBar name="Props : Passing data" />
      <Greet_By_Name name="vijay">
        <h6>This is child props for vijay</h6>
      </Greet_By_Name>
      <Greet_By_Name name="Robert" />
      <Greet_By_Name name="Bell" />
      <hr></hr>
    </div>
  );
}

export default App;
