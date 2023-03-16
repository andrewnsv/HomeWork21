import React, { useState, createContext } from "react";

import SecondDiv from './components/SecondDiv';

import "./App.css";

export const MyContext = createContext();

 function App() {
  const [light, setLight] = useState("light");
  const [dark, setDark] = useState("dark");

  const addLight = () => {
    if(light === "light"){}
    setLight("light");
    setDark("");
  };
  const addDark = () => {
    setDark("dark");
    setLight("");
  };

  // const ToggleHaldler = () => {
  //  setLight(!light) 
  // }

  return (
    <MyContext.Provider value={{ light }}>
      <div className={`App`}>
        <div className="buttons">
          <button onClick={addLight}>Light</button>
          <button onClick={addDark}>Dark</button>
        </div>
        <SecondDiv />
      </div>
    </MyContext.Provider>
  );
}

export default App