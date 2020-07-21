import React from "react";

function FunClick() {
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary" type="submit">
        Click
      </button>
    </div>
  );
}

export default FunClick;
