import React from "react";
import "./App.css";
import Greet from "./components/Greet.jsx";
import Welcome from "./components/Welcome.jsx";
import Greet_By_Name from "./components/Greet_By_Name";
import NavBar from "./components/NavBar";
import Message from "./components/message";

function App() {
  return (
    <div className="App">
      <NavBar name="Vijaycreations" />

      <hr></hr>
      <h4>
        <span className="badge badge-primary">SFC | SCC</span>
      </h4>
      <hr></hr>

      <Greet name="| This is SFC passed through  'props' " />
      <Welcome name="| This is SCC passed through  'this.props' " />

      <hr></hr>
      <h4>
        <div className="badge badge-primary">Prpos : Passing </div>
      </h4>
      <hr></hr>

      <Greet_By_Name name="vijay">
        <h6>This is child props for vijay</h6>
      </Greet_By_Name>
      <Greet_By_Name name="Robert" />
      <Greet_By_Name name="Bell" />

      <hr></hr>
      <h4>
        <div className="badge badge-primary">SCC : Maintaining States</div>
      </h4>
      <hr></hr>

      <Message></Message>

      <hr></hr>
    </div>
  );
}

export default App;
