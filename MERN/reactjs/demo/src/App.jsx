import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  function incHandler() {
    setCount(count + 1);
  }
  function decHandler() {
    setCount(count - 1);
  }

  useEffect(
    () => {
      console.log('effect call');
      setPrice(count * 500);
    },
    [count] // dependent on count (state) // 
  )

  useEffect(
    () => {
      console.log('only once');
    },
    [] // empty dependency list // only once
  )

  return (
    <div className="container">
      <h1>{count}</h1>
      <h1>₹ {price}</h1>

      <button onClick={incHandler}>+</button>
      <button onClick={decHandler}>-</button>
    </div>
  );
}

export default App;
