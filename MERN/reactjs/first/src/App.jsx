import { useState } from "react";
import Person from "./Person";
function App() {

  const [data, setData] = useState(
    [
      {
        name: "Bhagirath",
        email: "bhagirath@wscubetech.com",
        age: 60,
        flag: true
      },
      {
        name: "Virendra",
        email: "virendra@wscubetech.com",
        age: 14,
        flag: false
      },
      {
        name: "Rajesh",
        email: "rajesh@wsucubetech.com",
        age: 60,
        flag: true
      },
      {
        name: "Palak",
        email: "palak@wsucubetech.com",
        age: 15,
        flag: false
      },
      {
        name: "Vijay",
        email: "vijay@wsucubetech.com",
        age: 50,
        flag: true
      }
    ]
  )

  const removeData = (pos) => {
    const filterData = data.filter(
      (d, i) => {
        if (i !== pos) return true
        else return false;
      }
    )
    setData(filterData); // update the state with new data // component re-render

  }


  const display = data.map(
    (d, i) => {
      return <Person handler={removeData} index={i} name={d.name} email={d.email} age={d.age} key={i} flag={d.flag} />
    }
  )
  return (
    <>
      {display}
      {/* <Person name="Bhagirath" email="bhagirath@wscubetech.com" age="14" />
      <Person name="Rajesh" email="rajesh@wscubetech.com" age="60" />
      <Person name="Palak" email="palak@wscubetech.com" age="10" />
      <Person name="Dinesh" email="dinesh@wscubetech.com" age="100" /> */}
    </>
  )
}

export default App;