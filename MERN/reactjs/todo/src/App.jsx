import Box from "./Box";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [items, setItem] = useState([]);

  const addTaskHandler = (task) => {
    const newItems = [
      ...items,
      task
    ];
    setItem(newItems); // state update // component re-render
  }

  const removeHandler = (index) => {
    const newData = items.filter(
      (d, i) => {
        return i !== index ? true : false;
      }
    )
    setItem(newData);
  }

  return (
    <div className="container">
      <Input handler={addTaskHandler} />
      <Box data={items} remove={removeHandler} />
    </div>
  );
}

export default App;
