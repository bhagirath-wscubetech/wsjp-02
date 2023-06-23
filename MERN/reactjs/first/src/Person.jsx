import { useState } from "react";

function Person(props) {
    const [toggle, setToggle] = useState(props.flag);
    const toggleHandler = () => {
        setToggle(!toggle);
    }

    // toggle = 1; not allowed
    return (
        <div className="person-box"
            style={
                {
                    background: toggle == true ? 'lightblue' : ''
                }
            }
        >
            <h3>Name: {props.name} </h3>
            <h3>Email: {props.email}</h3>
            <h3 style={
                {
                    color: props.age >= 18 ? 'green' : 'red'
                }
            }>Age:{props.age} </h3>
            <button onClick={toggleHandler}>Toggle</button>
        </div>
    )
}

export default Person;