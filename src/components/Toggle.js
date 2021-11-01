import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  function toggleState (){
    setIsOn(!isOn)
  }
  return <button onClick={toggleState}>{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
