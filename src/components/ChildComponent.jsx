import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.handleGreet("child component");
        }}
        className="btn btn-warning"
      >
        Greet parent
      </button>
    </div>
  );
}

export default ChildComponent;
