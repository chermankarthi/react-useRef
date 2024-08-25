import React, { useEffect, useRef, useState } from "react";

const App = () => {
  //ex-1
  const [value, setValue] = useState(0);
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });

  //ex-2
  const inputElement = useRef();
  const handleClick = () => {
    inputElement.current.style.backgroundColor = "red";
  };

  return (
    <>
      <h1>ex-1</h1>
      <div style={{ width: "50%", margin: "50px auto" }}>
        <div style={{ display: "flex", alignContent: "center", gap: "25px" }}>
          <button onClick={() => setValue((value) => value - 1)}>-</button>
          <div>{value}</div>
          <button onClick={() => setValue((value) => value + 1)}>+</button>
        </div>
        <div>count : {count.current}</div>
      </div>

      <h1>ex-2</h1>
      <div>
        <input type="text" ref={inputElement}></input>
        <button onClick={() => handleClick()}>Click</button>
      </div>
    </>
  );
};

export default App;
