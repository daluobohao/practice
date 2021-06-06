import React, { useState, useEffect } from "react";
export default function Button() {
  const [text, setFirstName] = useState("王一");
  const [text2, setSecondName] = useState("张二");
  const [text3, setThirdName] = useState("刘三");
  useEffect(() => {
    console.log('effect-text:', text)
  })
  function changeText() {
    setFirstName("王一1");
    console.log('text:', text)
  }
  function changeText2() {
    return setSecondName("张二2");
  }
  function changeText3() {
    return setThirdName("刘三3");
  }

  return (
    <div className="textButton">
      <p>{text}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <button onClick={changeText}>点击修改王一</button>
      <button onClick={changeText3}>点击修改刘三</button>
      <button onClick={changeText2}>点击修改张二</button>

    </div>
  );
}