import React from "react";
import Count_com from "./Count_com";

const Count = () => {
  const [count, setCount] = React.useState(0);
  function countDown() {
    if (count === 0) return;
    setCount(prevCount => prevCount - 1);
  }
  function countUp() {
    setCount(prevCount => prevCount + 1);
  }
  return (
    <div>
      <button onClick={countDown}>&minus;</button>
      {/* <Count_com 
        number = {count}
      /> */}
      <button onClick={countUp}>+</button>
    </div>
  );
};

export default Count;
