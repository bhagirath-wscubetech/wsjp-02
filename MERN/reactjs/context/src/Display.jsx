import React , {useContext} from 'react';
import { CounterContext } from './Context/Main';
const Display = () => {

    const {count} = useContext(CounterContext);
    // console.log("Inside display",data)
    // consumer

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default Display;
