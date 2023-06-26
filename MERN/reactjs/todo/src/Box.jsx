import React from 'react';

const Box = (props) => {
    // console.log(props.data)

    const display = props.data.map(
        (d, i) => {
            return <li key={i}>{d} <span onClick={
                () => {
                    props.remove(i)
                }
            }>X</span></li>
        }
    )
    return (
        <div className='to-do-box'>
            <ul>
                {display}
            </ul>
        </div>
    );
}

export default Box;
