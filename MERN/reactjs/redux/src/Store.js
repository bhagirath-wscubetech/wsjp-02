import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Reducers/CounterReducer'
const store = configureStore(
    {
        reducer: {
            counter: CounterReducer
        }
    }
)

export default store;