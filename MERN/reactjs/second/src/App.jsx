import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const incHandler = () => {
    if (count == 10) return;
    setCount(count + 1);
  }

  function decHandler() {
    if (count == 0) return;
    setCount(count - 1);
  }

  return (
    <div className="container">
      {/* <button onclick="incHandler()">+</button> */}
      <button onClick={incHandler}>+</button>
      <h1>
        {count}
      </h1>
      <button onClick={decHandler}>-</button>
    </div>
  );
}

export default App;
