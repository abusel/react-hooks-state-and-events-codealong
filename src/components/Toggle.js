import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  const color = isOn ? 'red': 'white'
  function toggleState (){
    setIsOn(!isOn)
  }
  return <button onClick={toggleState} style= {{background : color}}>{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
