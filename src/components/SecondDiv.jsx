import React, { useContext } from "react";
import { MyContext } from "../App";
import CustomInput from "./CustomInput";

function SecondDiv() {
  const { light } = useContext(MyContext);

  return (
    <div className={`second-div ${light ? "light" : "dark"}`}>
      <CustomInput text="" placeholder="Вводите только цифри" />
      <p>{light ? 'Day' : 'Night'}</p>
    </div>
  );
}

export default SecondDiv;