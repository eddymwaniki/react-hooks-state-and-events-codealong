import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  function handleCick(){
    setIsOn((isOn) => !isOn )
  }
  return <button onClick={handleCick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
