import Box from "./Box";
import Input from "./Input";
import { useEffect, useState } from "react";

function App() {
  const [items, setItem] = useState([]);

  const addTaskHandler = (task) => {
    const newItems = [
      ...items,
      task
    ];
    setItem(newItems); // state update // component re-render
    localStorage.setItem("timestamp", new Date().getTime());
  }

  function addToLs() {
    if (items.length != 0) {
      const datajson = JSON.stringify(items); // array to json
      localStorage.setItem("todos", datajson);
    }
  }


  const removeHandler = (index) => {
    const newData = items.filter(
      (d, i) => {
        return i !== index ? true : false;
      }
    )
    setItem(newData);
    localStorage.setItem("timestamp", new Date().getTime());
  }

  useEffect(
    () => {
      const timestamp = localStorage.getItem("timestamp");
      if (timestamp !== null) {
        const current = new Date().getTime();
        const diff = current - timestamp;
        console.log(diff);
        if (diff > 3600000) {
          localStorage.removeItem("todos");
          localStorage.removeItem("timestamp");
        } else {
          const lsData = localStorage.getItem("todos");
          if (lsData !== null) {
            setItem(JSON.parse(lsData)); // json to array
          }
        }
      }
    },
    []
  )



  useEffect(
    () => {
      addToLs()
    },
    [items]
  )

  return (
    <div className="container">
      <Input handler={addTaskHandler} />
      <Box data={items} remove={removeHandler} />
    </div>
  );
}

export default App;
