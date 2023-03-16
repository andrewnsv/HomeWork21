import React, { useState, createContext } from "react";

export const MyContext = createContext();

const MyProvider = ( {children} ) => {
  const [light, setLight] = useState("light");
  const [dark, setDark] = useState("dark");

  const addLight = () => {
    if (light === "light") {
    }
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
    <MyContext.Provider value={{ light, addLight, addDark }}>
        {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
