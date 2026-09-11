import React, { useEffect } from "react";

const UseEffectAdd = () => {
  function add() {
    let a = 10;
    let b = 30;
    let c = parseInt(a) + parseInt(b);
    console.log(c);
  }
  useEffect(() => {
    add();
  });

  return (
    <>
      <h1 style={{ backgroundColor: "lightcyan" }}>Addition page</h1>
    </>
  );
};

export default UseEffectAdd;
