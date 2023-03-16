import React, { useContext } from "react";
import SecondDiv from "../components/SecondDiv";
import { MyContext } from "../provider/MyContext";

const FirstDiv = () => {
  const { addDark, addLight } = useContext(MyContext);

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={addLight}>Light</button>
        <button onClick={addDark}>Dark</button>
      </div>
      <SecondDiv />
    </div>
  );
};

export default FirstDiv;
