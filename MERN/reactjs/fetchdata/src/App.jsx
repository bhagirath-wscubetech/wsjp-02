import { useState, useEffect } from "react";
import DataTable from "./DataTable";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await response.json();
    setLoading(false);
    setData(userData); // state update // re-render
  }

  useEffect(
    () => {
      // this code will execute only once at the first render
      getData();
    },
    []
  )
  console.log('Hello');
  return (
    <div className="container">
      {/* <button onClick={getData} className="btn btn-primary my-2 d-block mx-auto">Get Data</button> */}
      
          <DataTable data={data}  loading={loading}/>
      
    </div>
  );
}

export default App;
