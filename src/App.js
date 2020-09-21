import React from "react";
import "./App.css";
import Greet from "./components/Greet.jsx";
import Welcome from "./components/Welcome.jsx";
import Greet_By_Name from "./components/Greet_By_Name";
import NavBar from "./components/NavBar";
import Message from "./components/message";
import Counter from "./components/Counter";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet.jsx";
import InLine from "./components/inLine";
import Form from "./components/Form";

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
      <h4>
        <div className="badge badge-primary">Counter</div>
      </h4>
      <hr></hr>

      <Counter></Counter>

      <hr></hr>
      <h4>
        <div className="badge badge-primary">List Rendering</div>
      </h4>
      <NameList></NameList>
      <hr></hr>

      <StyleSheet primary={false}></StyleSheet>
      <hr></hr>

      <InLine></InLine>
      <hr></hr>

      <Form></Form>
      <hr></hr>
    </div>
  );
}

export default App;

