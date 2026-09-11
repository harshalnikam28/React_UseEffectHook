import React, { useEffect, useState } from "react";

const UseEffect = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    //   console.log("UseEffect components");
    alert("Useeffect  components");
  }, [count]);

  return (
    <>
      <h1 style={{ backgroundColor: "lightblue" }}>UseEffect Hook</h1>
      <h2>Counter:{count}</h2>
      <button
        style={{ backgroundColor: "lightseagreen" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </>
  );
};

export default UseEffect;
