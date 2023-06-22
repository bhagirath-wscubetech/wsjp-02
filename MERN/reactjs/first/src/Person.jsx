function Person(props) {
    return (
        <div className="person-box">
            <h3>Name: {props.name} </h3>
            <h3>Email: {props.email}</h3>
            <h3 style={
                {
                    color: props.age >= 18 ? 'green' : 'red'
                }
            }>Age:{props.age} </h3>
        </div>
    )
}

export default Person;