import { createSlice } from '@reduxjs/toolkit'

const initState = {
    count: 0,
    price: 0
};

const Counter = createSlice(
    {
        name: "counter",
        initialState: initState,
        reducers: {
            inc: (state) => {
                if (state.count != 10) {
                    state.count += 1;
                    state.price = 500 * state.count;
                }
            },
            dec: (state) => {
                if (state.count != 0) {
                    state.count -= 1;
                    state.price = 500 * state.count;
                }
            },
            changeByVal: (state, action) => {
                state.count += action.payload.number
            }
        }
    }
)

export const { inc, dec, changeByVal } = Counter.actions;
export default Counter.reducer;