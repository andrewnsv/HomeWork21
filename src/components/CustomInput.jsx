import React, { useState } from "react";

const CustomInput = () => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value;
    const valid = !isNaN(value) && value !== '';
    console.log(valid)
    setValue(value);
    setValid(valid);
  };

  return (
    <>
      <input type="text" value={value} placeholder='Введите сюда свой текст' onChange={handleChange} />
      {!valid && <p>Поле невалидно <b>(Введите только цифры)</b></p>}
    </>
  );
};

export default CustomInput;
