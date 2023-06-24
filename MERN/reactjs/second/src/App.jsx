import { useState } from "react";
import Button from "./Button";
function App() {
  const [count, setCount] = useState(0);

  // const incHandler = () => {
  //   if (count == 10) return;
  //   setCount(count + 1);
  // }

  // function decHandler() {
  //   if (count == 0) return;
  //   setCount(count - 1);
  // }

  const incByVal = (num) => {
    setCount(count + num);
  }

  return (
    <div className="container">
      {/* <Button type="+" handler={incHandler} /> */}
      <h1>
        {count}
      </h1>
      <div>
        <Button num={5} handler={incByVal} />
        <Button num={2} handler={incByVal} />
        <Button num={1} handler={incByVal} />
        <Button num={10} handler={incByVal} />
      </div>
      {/* <Button type="-" handler={decHandler} /> */}

    </div>
  );
}

export default App;
