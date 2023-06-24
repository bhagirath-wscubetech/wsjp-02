function Button(props) {

    const eventCal = () => {
        props.handler(props.num);
    }

    return (
        <button onClick={eventCal}>
            Inc by {props.num}
        </button>
    )

}
export default Button;